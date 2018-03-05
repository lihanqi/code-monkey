import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProgressDashboardComponent } from "./components/progress-dashboard/progress-dashboard.component";
import { ProblemsComponent } from "./problems/problems.component";
import { ProblemRoutingModule } from "../problem/problem-routing.module";
import { ProblemListComponent } from "./components/problem-list/problem-list.component";
import { ProblemDetailComponent } from "../problem/components/problem-detail/problem-detail.component";

@NgModule({
  imports: [CommonModule, FormsModule, ProblemRoutingModule],
  declarations: [
    ProblemsComponent,
    ProgressDashboardComponent,
    ProblemListComponent,
    ProblemDetailComponent
  ],
  exports: [ProblemsComponent]
})
export class ProblemModule {}
