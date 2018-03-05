import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressDashboardComponent } from './progress-dashboard/progress-dashboard.component';
import { ProblemsComponent } from './problems/problems.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProgressDashboardComponent, ProblemsComponent],
  exports: [ProblemsComponent]
})
export class ProblemModule { }
