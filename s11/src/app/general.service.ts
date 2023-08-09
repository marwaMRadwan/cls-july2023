import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(public translate: TranslateService, private _http:HttpClient) { }
  // public changeLang(val:string){
  //   this.translate.use(val);
  // }

  // getApiData(id:string):Observable<any>{
  //   return this._http.get(`http://localhost:3000/${id}`)
  // }

}
