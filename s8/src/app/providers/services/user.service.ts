import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private URL = "http://test.martizoom.com"

  constructor( private _http:HttpClient) { }

  listMarketsCategories():Observable<any>{
    return this._http.get(`${this.URL}/api/ListMarketsCategories/2`)
  }
  listStands( id: string ):Observable<any>{
    return this._http.get(`${this.URL}/api/Category/stands/2/${id}`)
  }
  productsByStand(catId: string, standId:string):Observable<any>{
    return this._http.get(`${this.URL}/api/ProductsByCategory/2/${catId}/${standId}/0/10`)
  }
}
