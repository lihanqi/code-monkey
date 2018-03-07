import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProblemComponent } from './problem.component'
import { ProblemListComponent } from "./components/problem-list/problem-list.component";
import { ProblemDetailComponent } from "./components/problem-detail/problem-detail.component";
import { ProblemsComponent } from "./components/problems/problems.component";

const problemRoutes: Routes = [
	{
		path: 'problems',
		component: ProblemComponent,
		children: [
			{
				path: ':id', component: ProblemDetailComponent
			},
			{
				path: '', component: ProblemsComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(problemRoutes)],
  exports: [RouterModule]
})
export class ProblemRoutingModule {}
