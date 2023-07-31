import { Component } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public _data:UserService){
    _data.me().subscribe(
      res=>{
        _data.userData = res
      },
      err=>{
        _data.isLoggedIn=false
        _data.userData={}
      },
      ()=>{
        _data.isLoggedIn=true
      }
    )
  }
  
logout(){
  this._data.logout().subscribe(
    res=> {
      this._data.isLoggedIn=false
      this._data.userData={}
      localStorage.removeItem("taskToken")
      console.log(res)
    },
    err=> console.log(err),
    ()=> console.log("finished")
  )
}
}
