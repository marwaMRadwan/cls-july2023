import { Component } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private _user: UserService){
    this._user.profile().subscribe(
      res=> console.log(res),
      err=> console.log(err),
      ()=> console.log("done")
    )
  }

}
