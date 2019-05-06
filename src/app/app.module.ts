import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageModule } from './main-page/main-page.module';
import 'hammerjs';

import { AppComponent } from './app.component';

import { NavBarComponent } from './common/nav-bar/nav-bar.component';
// import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
	{path: '', redirectTo: '/main', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
    // MainPageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MainPageModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
