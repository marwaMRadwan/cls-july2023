import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL : string = "https://dummyjson.com/"
  constructor(private _http:HttpClient) { }

  getAllProduct(): Observable<any>{
    return this._http.get(`${this.baseURL}products`)
  }

  getSingleProduct(id:string):Observable<any>{
    return this._http.get(`${this.baseURL}products/${id}`)
  }
}
