import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth-guard/auth-guard.service'
// Root component
import { ProfileComponent } from './profile.component';
/////////////////
import { ProfileHomeComponent } from './components/profile-home/profile-home.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';

const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: 'detail', component: ProfileDetailComponent
      },
      {
        path: 'password', component: PasswordChangeComponent
      },
      {
        path: '', component: ProfileHomeComponent,
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
