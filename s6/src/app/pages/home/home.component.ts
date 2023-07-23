import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/providers/services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products : Product[] = []
  filteredData : Product[]=[]
  errMsg: string=""
  isLoaded :boolean= false
  searchKey: string = ""

  constructor(private _data: DataService, private _activated:ActivatedRoute){
    // console.log(_activated.snapshot.queryParamMap.get("name"))
    console.log(_activated.snapshot.queryParams["name"])
  }
  ngOnInit():void{
    this.getAllProducts()
  }
  getAllProducts(){
    this._data.getAllProduct().subscribe(
      res=>{
        this.products = res.products
        this.filteredData = res.products
      },
      err=>{
        this.errMsg = err.message
        this.isLoaded=true
      },
      ()=>{ 
        this.isLoaded=true
      }
    )
  }
  filterData(){
    this.filteredData=this.products.filter( pro => 
      pro.title.includes(this.searchKey) 
    )
  }
  // data = [{name:"marwa"}]
  // d = new Date()

}
