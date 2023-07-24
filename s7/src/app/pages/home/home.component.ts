import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allUsers : User[]= []
  constructor(private _auth:AuthService){
    this.getData()
  }
  getData(){
    this._auth.allUsers().subscribe(
      res=> this.allUsers=res.data,
      err=> console.log(err),
      ()=>console.log("done")
      
    )
  }
}
