import { Injectable } from "@angular/core";
import { CanActivate, Router, CanLoad } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
        return true;
    } else {
        // TODO: login page later
        this.router.navigate(['/problems']);
        console.log("redirect to login page");
        return false;
    }
  }

  canLoad(): boolean {
      return this.canActivate();
  }

}
