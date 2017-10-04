import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../services/my-http.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  results: Array<any>;
  buttonMessage: string;

  myHttpService: MyHttpService;


  //dar de alta
  showEditForm: boolean;
  usuario: any;

  //exponer datos
  selectedUser:any;
  hasSelectedItem:boolean;
  constructor(private service: MyHttpService) {

    this.myHttpService = service;

    this.results = [];
    this.usuario = { idusuario: -1, nombre: "", correo: "", pass: "", sexo: "", foto: "pordefecto.png" };
    this.hasSelectedItem = false;
  }

  ngOnInit() {
    this.refresh();
  }

  getFiles(event) {
    this.usuario.foto = event.target.files[0].name;
  }

  save() {
    this.myHttpService.httpPostPromise("http://localhost/APIREST-PHP-POO-JWT-MIDDLEWARE-Documentar/apirest/user/add", this.usuario)
      .then(data => {
        this.refresh();
      })
      .catch(error => console.log(error));
  }

  delete(idusuario){
    this.myHttpService.httpPostPromise("http://localhost/APIREST-PHP-POO-JWT-MIDDLEWARE-Documentar/apirest/user/delete", {idusuario:idusuario})
    .then(data => {
      this.refresh();
    })
    .catch(error => console.log(error));
  }

  refresh() {
    this.myHttpService.httpGetPromise("http://localhost/APIREST-PHP-POO-JWT-MIDDLEWARE-Documentar/apirest/user/", {})
      .then(data => {
        this.results = data;
        console.log(data)
      })
      .catch(error => console.log(error));
  }

  selectedItemOnClick(usuario){
    this.hasSelectedItem = true;
    this.selectedUser = usuario;
  }
}
