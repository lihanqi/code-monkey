// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "./app-routing.module";
// Feature Modules
import { ProblemModule } from "./problem/problem.module";
// Components
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";
import { NewProblemComponent } from "./components/new-problem/new-problem.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
// Services
import { HttpService } from "./shared/services/http/http.service";
import { AuthService } from "./shared/services/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewProblemComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProblemModule,
    // WARNING: Dont move! (RoutingModule must stay the last.)
    RoutingModule
  ],
  providers: [HttpService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
