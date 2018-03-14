import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "../profile/profile.component";
import { ProfileHomeComponent } from "../profile/components/profile-home/profile-home.component";

@NgModule({
  imports: [CommonModule, ProfileRoutingModule],
  declarations: [ProfileComponent, ProfileHomeComponent],
})
export class ProfileModule {}
