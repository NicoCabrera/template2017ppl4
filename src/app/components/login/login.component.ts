import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.email = "";
    this.password = "";
  }

  ngOnInit() {
  }

  checkUser() {
    localStorage.setItem("user",this.email);
    this.router.navigate(["/menu/home"]);
  }
  setAdminData(){
    this.email = "admin@admin.com";
    this.password = "123456";
  }
}