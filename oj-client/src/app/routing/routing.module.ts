import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemListComponent } from '../components/problem-list/problem-list.component';
import { ProblemDetailComponent } from '../components/problem-detail/problem-detail.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'problems', component: ProblemListComponent },
  { path: 'problems/:id', component: ProblemDetailComponent },
  { path: '', redirectTo: '/problems', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
