import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:string;
  subtitle:string;
  constructor() { }

  ngOnInit() {
    this.title = "Bienvenido";
    this.subtitle = "Utilice la barra de navegación para realizar cualquier acción que desee.";
  }

}
