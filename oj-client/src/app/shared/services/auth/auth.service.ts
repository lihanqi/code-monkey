// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HttpService } from '../http/http.service'
import * as auth0 from 'auth0-js';
import { promise } from 'protractor';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'h1uq5F5EKHK836lMXelhIRWpnIypelD0',
    domain: 'lihanqi.auth0.com',
    responseType: 'token id_token',
    audience: 'https://lihanqi.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000',
    scope: 'openid profile'
  });

  isLoggedin: boolean = false;
  userProfile: any;

  constructor(public router: Router, private http: HttpService) {}

  public login() {
    this.auth0.authorize();
    // return false;
  }

  // Looks for the result of authentication in the URL hash. 
  // Then, the result is processed with the parseHash method from auth0.js.
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
        this.isLoggedin = true;
        this.getProfile();
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  // stores the user's Access Token, ID Token, and the Access Token's expiry time in browser storage.
  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.isLoggedin = false;
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // console.log(new Date().getTime() < expiresAt);
    return new Date().getTime() < expiresAt;
  }

  public getProfile(): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }

    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
    })
  }


  public getPhotoUrl(): string {
    if (!this.isAuthenticated() || !localStorage.getItem('access_token')) {
      return "ERROR: not authenticated";
    }
    const url = "https://lihanqi.auth0.com/userinfo";
    const headers = {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
    this.http.get(url, headers).subscribe(data => { console.log(data); return data; });
  }

  public test() {
    console.log("new test");
    // // this.getPhotoUrl();
    // if (this.userProfile) {
    //   console.log(JSON.stringify(this.userProfile));
    // } else {
    //   this.getProfile((err, profile) => {
    //     console.log(JSON.stringify(this.userProfile));
    //   })
    // }
    console.log(this.userProfile.picture);
    // console.log("test: " + this.getPhotoUrl());
  }


}