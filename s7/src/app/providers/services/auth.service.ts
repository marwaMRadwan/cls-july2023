import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BaseURL : string = "http://localhost:3000/api/"
  constructor(private _http: HttpClient) { }

  register(data: User):Observable<any>{
    return this._http.post(`${this.BaseURL}user/register`, data)
  }
  allUsers():Observable<any>{
    return this._http.get(`${this.BaseURL}user/all`)
  }
}
