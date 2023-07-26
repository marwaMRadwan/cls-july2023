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
    fcm_token: new FormControl()
  })
  logMe(){
    this._data.login(this.loginForm.value).subscribe(
      res=>{
        console.log(res)
        if( res.error =="Unauthorized"){
          this.toastr.error('Invalid Credintials', 'Marti Zoom Said');
        }
        else{
          this._route.navigate(["/"])
        }
      } 
      
    )
  }
}
