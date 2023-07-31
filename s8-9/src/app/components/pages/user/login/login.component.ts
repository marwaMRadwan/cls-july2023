import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _data:UserService, private toastr: ToastrService, private _route:Router){}
  loginForm= new FormGroup({
    phone: new FormControl(),
    fcm_token: new FormControl(this._data.fcm_token)
  })
  logMe(){
    this._data.login(this.loginForm.value).subscribe(
      res=>{
        localStorage.setItem("taskToken", `${res.token_type} ${res.access_token}`)
        this._data.isLoggedIn=true

        if( res.error =="Unauthorized"){
          this.toastr.error('Invalid Credintials', 'Marti Zoom Said');
        }
        else{
          this._data.me().subscribe(
            res=>{
              this._data.userData = res
            },
            err=>{
              this._data.isLoggedIn=false
              this._data.userData={}
            },
            ()=>{
              this._data.isLoggedIn=true
            }
          )
          this._route.navigate(["/"])
        }
      } 
      
    )
  }
}
