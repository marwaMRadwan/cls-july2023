import { Component } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  allProducts : any[]= []
  constructor(private _data:UserService, private _route:ActivatedRoute){
    this.getProducts()
  }

  getProducts(){
    this._data.productsByStand(this._route.snapshot.params['id'], this._route.snapshot.params['standId']).subscribe(
      res=>{
        this.allProducts = res.data
      }
    )
  }
}
