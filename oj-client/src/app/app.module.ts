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
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { NewProblemComponent } from "./components/new-problem/new-problem.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
// Services
import { DataService } from "./services/data/data.service";
import { CoEditingService } from "./services/co-editing/co-editing.service";
import { WebsocketService } from "./services/websocket/websocket.service";
import { ExecutionService } from "./services/execution/execution.service";
import { FooterComponent } from './shared/components/footer/footer.component';

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
    ExecutionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
