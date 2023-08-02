import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _user:UserService, private _route:Router){}
  login = new FormGroup({
    phone: new FormControl("", [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    fcm_token: new FormControl("erQBC8v71Z_hTKpA5NxvxV:APA91bFU0Hk2oxggb0MKq9K81Fi6ueseVrVStdLYAy7li3pjIzKDcKBilMLWFI-gt9I0C4CX_yK6_DDwoTBkQrRXeJ_kDieRCfdFYV6_Ro1Np26nLqiOoQwH9q7ngDLs8lx_TRu8Rw_3")
  })
  get loginData(){ return this.login.controls }
  loginErr = ""
  loginUser(){
    if(this.login.valid){   
      this._user.login(this.login["value"]).subscribe(
        res=>{
          if(res.error){
            this._user.isLoggedIn = false
            localStorage.removeItem("myApp")
            this.loginErr = res.error  
          }
          else{
            this.loginErr = ""
            localStorage.setItem("myApp", `${res.token_type} ${res.access_token}`)
            this._user.isLoggedIn = true
            this._route.navigateByUrl("/profile")
          }
        }
      )
    }
  }
}
