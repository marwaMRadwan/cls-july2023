import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  apiData:any = []
  errorinData = ""
  isLoaded : boolean = false
  constructor(private dataService: DataService){
    dataService.getProducts().subscribe(
      (data)=> {
        this.apiData= data.products
      },
      (err)=> {
        this.errorinData = err.message
      },
      ()=> {
        console.log("done")
        this.isLoaded=true
      }

    )
  }
}
