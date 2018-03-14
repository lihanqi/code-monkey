import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Root component
import { ProfileComponent } from './profile.component';
/////////////////
import { ProfileHomeComponent } from './components/profile-home/profile-home.component'

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '', component: ProfileHomeComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(profileRoutes)
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
