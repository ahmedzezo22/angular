import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  lang:any="en"
  URL = 'http://localhost:3000/'
  constructor(private _http:HttpClient) {
    this.lang=localStorage.getItem("cuuu")||1
   }

  registerUser(obj:any):Observable<any>{
    return this._http.post(`${this.URL}users`,obj)
  }
  sign(obj:any):Observable<any>{
    return this._http.post(`${this.URL}users/login`,obj)
  }
  logOut():Observable<any>{
    return this._http.post(`${this.URL}users/logOut`,null)
    
}
}