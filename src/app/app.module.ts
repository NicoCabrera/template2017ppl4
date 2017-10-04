import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Validaciones en formularios
import { RouterModule, Routes, RouterLinkActive } from '@angular/router'; // Ruteo
import { HttpModule } from '@angular/http'; //alguna duda?
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { GridComponent } from './components/grid/grid.component';
import { HomeComponent } from './components/home/home.component';
import { MyHttpService } from './services/my-http.service';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    MainMenuComponent,
    GridComponent,
    HomeComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    RouterModule,
    HttpModule
  ],
  providers: [MyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
