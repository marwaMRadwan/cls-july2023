import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileForm = new FormGroup({
    first_name : new FormControl(""),
    email: new FormControl(),
    phone: new FormControl(),
    MacAddress: new FormControl( this._data.mac )
  })
  
  constructor(public _data:UserService){
    _data.me().subscribe(
      res=> this.profileForm.patchValue(res)
    )
  }
}
