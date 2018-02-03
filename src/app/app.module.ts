import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    NavBarComponent,
    NewProblemComponent,
    ProblemDetailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
