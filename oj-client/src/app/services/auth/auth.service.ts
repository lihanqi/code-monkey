// src/app/auth/auth.service.ts

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { HttpService } from "../http/http.service";
import * as auth0 from "auth0-js";
import { debug } from "util";


@Injectable()
export class AuthService {
  auth0 = new auth0.WebAuth({
    clientID: "h1uq5F5EKHK836lMXelhIRWpnIypelD0",
    domain: "lihanqi.auth0.com",
    responseType: "token id_token",
    audience: "https://lihanqi.auth0.com/userinfo",
    redirectUri: window.location.origin,
    scope: "openid profile"
  });

  isLoggedin: boolean = false;
  loadFinished = false;
  userProfile: any;

  constructor(public router: Router, private http: HttpService) {
  }

  public login() {
    this.auth0.authorize();
  }

  public initService() {
    if (this.isAuthenticated()) {
      this.getProfile();
    } else {
      this.handleAuthentication();
    }
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.getProfile();
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      } else {
        this.loadFinished = true;
      }
    });
  }

  
  // stores the user's Access Token, ID Token, and the Access Token's expiry time in browser storage.
  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // Go back to the home route
    this.isLoggedin = false;
    this.router.navigate(["/"]);
  }

  public isAuthenticated(): boolean {
    const expiresAt = localStorage.getItem("expires_at");
    if (expiresAt) {
      return new Date().getTime() < JSON.parse(expiresAt);
    } else {
      return false;
    }
    
  }

  private getProfile(): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      this.loadFinished = true;
      throw new Error('Access Token must exist to fetch profile');
    }

    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
        this.loadFinished = true;
        this.isLoggedin = true;
      }
      if (err) {
        throw new Error("Failure from Auth0:" + err);
      }
    });
  }

  public updateProfile(profile): Promise<any> {
    // TODO:
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.userProfile = profile;
        resolve(profile);
      }, 2000);
    })
  }

  public changePassword(oldPassword: string, newPassword: string): Promise<string> {
    return new Promise((resolve, reject) => {
      // TODO: MOCK TIME OUT
      setTimeout(() => {
        if (newPassword == oldPassword) {
          reject("Failure")
        } else {
          resolve("Success!");
        }
      }, 1000);
    })
  }

}
