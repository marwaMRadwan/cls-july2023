import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  reg(register:any){
    if(register.valid){
      console.log(register.value);
      register.resetForm()
    }
  }
}
