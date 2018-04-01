import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
// import { SharedModule } from './shared/shared.module';
// import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { NewProblemComponent } from "./components/new-problem/new-problem.component";
import { AuthGuard } from "./services/auth-guard/auth-guard.service";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "profile",
    loadChildren: "app/profile/profile.module#ProfileModule",
    canLoad: [AuthGuard]
  },
  { path: "contribute", component: NewProblemComponent },
  { path: "", redirectTo: "/problems", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    // SharedModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
