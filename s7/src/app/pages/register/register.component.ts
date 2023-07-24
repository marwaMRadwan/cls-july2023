import { Component } from '@angular/core';
import { AuthService } from 'src/app/providers/services/auth.service';
import { NgForm } from "@angular/forms"
import { Router } from "@angular/router"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailUniqueError = false
  constructor(private _auth:AuthService, private _router:Router){}
  reg(register:NgForm){
    if(register.valid){
      this._auth.register(register.value).subscribe(
        res=> console.log(res),
        err=> {
          this.emailUniqueError=true
        },
        ()=> {
          register.resetForm()
          this._router.navigateByUrl("/")
        }
      )
    }
  }
}
