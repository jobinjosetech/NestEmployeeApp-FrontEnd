import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private route:Router){}
  username=""
  password=""

  readValues(){
    if(this.username=="admin"&& this.password=="12345") {
      this.route.navigate(["/addEmployee"])
    }else{
      alert("Oops!!! Please check your credentials ")
    }
  }
}
