import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regreact',
  templateUrl: './regreact.component.html',
  styleUrls: ['./regreact.component.css']
})
export class RegreactComponent {
  isSubmitted =false
  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    age: new FormControl("", [Validators.min(21), Validators.max(60), Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })
  register(){
    this.isSubmitted=true
    console.log(this.registerForm.value)
  }
  get name(){ return this.registerForm.get("name")}
  get age(){ return this.registerForm.get("age")}
  get email(){ return this.registerForm.get("email")}
  get password(){ return this.registerForm.get("password")}
  
}
