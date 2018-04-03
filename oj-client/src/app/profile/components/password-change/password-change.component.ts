import { Component, OnInit } from '@angular/core';
import { ProfileManagementService } from '../../services/profile-management/profile-management.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  oldPassword: string;
  newPassword: string;

  constructor(private profileService: ProfileManagementService) { }

  ngOnInit() {

  }

  submit(){
    // TODO: 改善提示效果, 根据不同情况有不同的提示, 在保存过程中有Indicator
    this.profileService.changePassword(this.oldPassword, this.newPassword)
      .then(msg => {
        window.alert(msg);
      })
      .catch((err) => {
        window.alert(err);
      });
  }

  cancel(){
    window.history.back();
  }

}   
