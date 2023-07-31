import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public mac = "123d3.222.45558Ac"
  public fcm_token= "erQBC9v71Z_hTKpA5NxvxV:APA91bFU0Hk2oxggb0MKq9K81Fi6ueseVrVStdLYAy7li3pjIzKDcKBilMLWFI-gt9I0C4CX_yK6_DDwoTBkQrRXeJ_kDieRCfdFYV6_Ro1Np26nLqiOoQwH9q7ngDLs8lx_TRu8Rw_3"
  public isLoggedIn = false
  public userData :any = null
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

  register(data:any):Observable<any>{
    return this._http.post(`${this.URL}/api/auth/Register`, data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.URL}/api/auth/Login`, data)
  }
  logout():Observable<any>{
    return this._http.post(`${this.URL}/api/auth/logout`, null)
  }
  me():Observable<any>{
    return this._http.post(`${this.URL}/api/auth/me`,null)
  }
  me2(cb:any):void{
    this._http.post(`${this.URL}/api/auth/me`,null).subscribe(
      res=>{
        this.isLoggedIn=true
        cb(true)
      },
      err=>{
        this.isLoggedIn=false
        cb(false)
      }
    )
    // return this.isLoggedIn
  }

}
