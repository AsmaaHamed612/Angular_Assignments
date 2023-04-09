import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { User } from '../Shared-Classes-and-types/User';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _httpClient:HttpClient,private router:Router) { }

userData =new BehaviorSubject(null);

  register(formData:object):Observable<any>
  {
    return this._httpClient.post(``, formData);
  }

  login(formData:object):Observable<any>
  {
    return this._httpClient.post(``, formData);
  }

  saveUserData()
  {
    let encodedUserData= JSON.stringify(localStorage.getItem('usarToken'))
    this.userData.next(jwtDecode(encodedUserData))
    this.router.navigate(['login']);
  }

  logout()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null)
  }
  _url:string="http://localhost:3000/enroll";
  enroll(user:User)
  {
    //http call
   return this._httpClient.post(this._url,user);
  }

}



