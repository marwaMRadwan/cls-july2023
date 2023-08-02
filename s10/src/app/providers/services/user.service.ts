import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from 'src/app/models/register';
import { Login } from 'src/app/models/login';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = "http://test.martizoom.com"
  public isLoggedIn = false
  constructor(private _http: HttpClient) { }

  register(data:Register):Observable<any>{
    return this._http.post(`${this.URL}/api/auth/Register`, data)
  }
  login(data:Login|any):Observable<any>{
    return this._http.post(`${this.URL}/api/auth/Login`, data)
  }
  profile():Observable<any>{
    return this._http.post(`${this.URL}/api/auth/me`, null)
  }
}
