import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "../profile/profile.component";
import { ProfileHomeComponent } from "../profile/components/profile-home/profile-home.component";
import { ProfileDetailComponent } from '../profile/components/profile-detail/profile-detail.component';
import { ProfileManagementService } from '../profile/services/profile-management/profile-management.service';
import { PasswordChangeComponent } from '../profile/components/password-change/password-change.component';
import { SharedModule } from "../shared/shared.module";
// import { LoadingIndicatorComponent } from "../shared/components/loading-indicator/loading-indicator.component";


@NgModule({
  imports: [CommonModule, FormsModule, ProfileRoutingModule, SharedModule],
  declarations: [ProfileComponent, ProfileHomeComponent, ProfileDetailComponent, PasswordChangeComponent],
  providers: [ProfileManagementService],
})
export class ProfileModule {}
