import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'career',
    component: CareerComponent
  }
];

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, CareerComponent],
  imports: [BrowserModule, NgbModule.forRoot(), RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
