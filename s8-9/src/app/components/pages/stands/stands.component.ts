import { Component } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-stands',
  templateUrl: './stands.component.html',
  styleUrls: ['./stands.component.css']
})
export class StandsComponent {
  allStands : any[] = []
  catId = this._route.snapshot.params['id']
  constructor(private _data:UserService, private _route:ActivatedRoute){
    this.getStands()
  }
  getStands(){
    this._data.listStands(this.catId).subscribe(
      res=>{
        this.allStands= res.data
      }
    )
  }
}
