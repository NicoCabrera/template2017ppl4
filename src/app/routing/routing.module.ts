import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes
import { LoginComponent } from '../components/login/login.component';
import { ErrorComponent } from '../components/error/error.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { GridComponent } from '../components/grid/grid.component';
import { HomeComponent } from '../components/home/home.component';


const appRoutes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "menu",
    component: MainMenuComponent,
    children: [
      {
        path: "grid",
        component: GridComponent
      },
      {
        path: "home",
        component: HomeComponent
      }
    ]
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
      
  ]
})
export class RoutingModule { }