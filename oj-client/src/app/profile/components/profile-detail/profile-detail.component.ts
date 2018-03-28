import { Component, OnInit } from '@angular/core';
import { ProfileManagementService } from '../../services/profile-management/profile-management.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  constructor(private profileService: ProfileManagementService) { }
  profile: object;
  savingState: boolean = false;

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
    this.profile['username'] = this.profile['name'];
  }

  save() {
    // console.log("saving");
    this.savingState = true
    this.profileService.save(this.profile).then(profile => {
      this.profile = profile;
      this.savingState = false;
      // console.log("saved");
    })
  }
  

}
