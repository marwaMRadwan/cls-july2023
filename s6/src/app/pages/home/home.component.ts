import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/providers/services/data.service';

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

  constructor(private _data: DataService){
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
}
