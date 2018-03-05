import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ProgressDashboardComponent } from './progress-dashboard/progress-dashboard.component';
import { ProblemsComponent } from './problems/problems.component';
import { ProblemRoutingModule } from '../problem/problem-routing.module';
import { ProblemListComponent } from '../problem/problem-list/problem-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProblemRoutingModule
  ],
  declarations: [ProgressDashboardComponent, ProblemsComponent, ProblemListComponent],
  exports: [ProblemsComponent, ProgressDashboardComponent]
})
export class ProblemModule { }
