import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes
import { LoginComponent } from '../components/login/login.component';
import { ErrorComponent } from '../components/error/error.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';


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
    /*children: [
      {
        path: "adivina",
        component: AdivinaMasListaComponent
      },
      {
        path: "actividad",
        component: ActividadMasListaComponent
      },]
    */
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