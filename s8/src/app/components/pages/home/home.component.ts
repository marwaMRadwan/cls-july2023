import { Component } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allCats: any[] = []
  constructor(private _data: UserService){
    this.getCategories()
  }

  getCategories(){
    this._data.listMarketsCategories().subscribe(
      res=> {
        this.allCats= res.data
      }
    )
  }
}
