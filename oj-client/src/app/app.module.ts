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
import { FooterComponent } from './shared/components/footer/footer.component';
// Services
import { DataService } from "./services/data/data.service";
import { CoEditingService } from "./services/co-editing/co-editing.service";
import { WebsocketService } from "./services/websocket/websocket.service";
import { ExecutionService } from "./services/execution/execution.service";
import { AuthService } from './shared/services/auth/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewProblemComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, ProblemModule, RoutingModule],
  providers: [
    DataService,
    CoEditingService,
    WebsocketService,
    ExecutionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
