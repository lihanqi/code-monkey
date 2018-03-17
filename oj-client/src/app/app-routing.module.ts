import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';


const routes: Routes = [
  { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule' },
  { path: 'contribute', component: NewProblemComponent },
  { path: '', redirectTo: '/problems', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
