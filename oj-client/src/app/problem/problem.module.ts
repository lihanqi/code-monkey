import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProblemRoutingModule } from "../problem/problem-routing.module";

// Root-Component
import { ProblemComponent } from '../problem/problem.component';
// Sub-root component
import { ProblemsComponent } from "./components/problems/problems.component";
import { ProblemDetailComponent } from "../problem/components/problem-detail/problem-detail.component";
// sub components:
import { ProgressDashboardComponent } from "./components/progress-dashboard/progress-dashboard.component";
import { ProblemListComponent } from "./components/problem-list/problem-list.component";
import { EditorComponent } from './components/editor/editor.component';
import { ExecutionResultComponent } from '../problem/components/execution-result/execution-result.component';

// Feature module services
import { DataService } from "./services/data/data.service";
import { CoEditingService } from "./services/co-editing/co-editing.service";
import { WebsocketService } from "./services/websocket/websocket.service";
import { ExecutionService } from "./services/execution/execution.service";

@NgModule({
  imports: [CommonModule, FormsModule, ProblemRoutingModule],
  declarations: [
    ProblemsComponent,
    ProgressDashboardComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    ProblemComponent,
    EditorComponent,
    ExecutionResultComponent
  ],
  providers: [
    DataService,
    CoEditingService,
    WebsocketService,
    ExecutionService
  ]
})
export class ProblemModule {}
