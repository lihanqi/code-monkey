import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { EditorComponent } from './components/editor/editor.component';

import { DataService } from './services/data/data.service';
import { CoEditingService } from './services/co-editing/co-editing.service';
import { WebsocketService } from './services/websocket/websocket.service';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    NavBarComponent,
    NewProblemComponent,
    ProblemDetailComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    RoutingModule, 
    HttpClientModule
  ],
  providers: [ DataService, CoEditingService, WebsocketService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
