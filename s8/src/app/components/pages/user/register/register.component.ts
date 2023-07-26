import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/providers/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _data:UserService, private toastr: ToastrService, private _route:Router){}

  registerForm = new FormGroup({
    firstName : new FormControl(""),
    email: new FormControl(),
    telephone: new FormControl(),
    MacAddress: new FormControl( this._data.mac )
  })
  regMe(){
    this._data.register(this.registerForm.value).subscribe(
      res=>{},
      err=>{
        this.toastr.error('Error in Registeration', 'Marti Zoom Said');
      },
      ()=>{
        this.toastr.success('Successfully Registered', 'Marti Zoom Said');
        this._route.navigateByUrl("/login")
      }
    )
  }
}
