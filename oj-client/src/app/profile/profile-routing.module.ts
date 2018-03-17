import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/services/auth-guard/auth-guard.service'
// Root component
import { ProfileComponent } from './profile.component';
/////////////////
import { ProfileHomeComponent } from './components/profile-home/profile-home.component'

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuard ],
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
