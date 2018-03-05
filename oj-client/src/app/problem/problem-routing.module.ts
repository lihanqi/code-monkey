import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProblemListComponent } from "./components/problem-list/problem-list.component";
import { ProblemDetailComponent } from "./components/problem-detail/problem-detail.component";
import { ProblemsComponent } from "./problems/problems.component";

const routes: Routes = [
  { path: "problems", component: ProblemsComponent },
  { path: "problems/:id", component: ProblemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemRoutingModule {}
