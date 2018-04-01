import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LoadingIndicatorComponent, FooterComponent, NavBarComponent,PageNotFoundComponent],
  exports:[LoadingIndicatorComponent, FooterComponent, NavBarComponent, PageNotFoundComponent]
})
export class SharedModule { }
