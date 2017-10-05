import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MyHttpService } from '../../services/my-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  myHttpService: MyHttpService;

  constructor(private route: ActivatedRoute, private router: Router, private service: MyHttpService) {
    this.email = "";
    this.password = "";

    this.myHttpService = service;
  }

  ngOnInit() {
  }

  checkUser() {
    let userData = { correo: this.email, pass: this.password };

    this.myHttpService.httpPostPromise("http://localhost/APIREST-PHP-POO-JWT-MIDDLEWARE-Documentar/apirest/login/signin", userData)
      .then(data => {
        if (data.jwt != null) {

          console.log(data.jwt);
          localStorage.setItem("user", this.email);

          this.router.navigate(["/menu/home"]);
        }else{
          alert(data.message);
        }
      })
      .catch(error => console.log(error));
  }

  setAdminData() {
    this.email = "admin@admin.com";
    this.password = "123456";
  }
}