import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username=""
  password=""

  readValues(){
    if(this.username=="admin"&& this.password=="12345") {
      alert("Login Success")
    }else{
      alert("Oops!!! Please check your credentials ")
    }
  }
}
