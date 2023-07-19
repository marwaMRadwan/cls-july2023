import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/providers/services/data.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  productId: string = ""
  errMsg = ""
  productData : Product = {
    id: 0,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: []
    }
  //paramMap
  //Params
  //  x/:id/:u/:p  { id:3,u:h,p:jh}
  constructor(private _activated:ActivatedRoute, private _data: DataService){}
  ngOnInit():void{
    // console.log(this._activated.snapshot.paramMap.get("id"))
    // console.log(this._activated.snapshot.params["id"]);
    // this._activated.paramMap.subscribe(p=> console.log(p.get("id")))
    // this._activated.params.subscribe(p=> console.log(p["id"]))
    this.productId = this._activated.snapshot.params["id"]
    this._data.getSingleProduct(this.productId).subscribe(
      res=>{
        this.productData = res
      },
      err=>{
        this.errMsg=err.error.message
      },
      ()=>{

      }
    )
  }  
}
