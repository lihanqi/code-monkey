import { Injectable } from '@angular/core';
// import { AuthService } from '../../../services/auth/auth.service';
import { AuthService } from '../../../services/auth/auth.service';
import { promise } from 'protractor';
import { ResolveEnd } from '@angular/router';

@Injectable()
export class ProfileManagementService {

  constructor(private auth: AuthService) { }

  getUserProfile() {
    return this.auth.userProfile;
  }

  updateProfile(profile): Promise<any> {
    return this.auth.updateProfile(profile);
  }

  changePassword(oldPassword: string, newPassword: string): Promise<string> {
    return this.auth.changePassword(oldPassword, newPassword);
  }

}
