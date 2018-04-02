import { Injectable } from '@angular/core';
// import { AuthService } from '../../../services/auth/auth.service';
import { AuthService } from '../../../services/auth/auth.service';

@Injectable()
export class ProfileManagementService {

  constructor(private auth: AuthService) { }

  getUserProfile() {
    
    return this.auth.userProfile;
  }

  save(profile): Promise<any> {
    return this.auth.updateProfile(profile);
  }

}
