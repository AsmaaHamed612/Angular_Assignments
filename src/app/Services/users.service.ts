import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from '../Shared-Classes-and-types/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient:HttpClient) {}
  GetUsersData(): Observable<IUser[]> {
    return this._httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users').pipe(catchError((err)=>{
            return throwError(()=>err.message||"Server Erorr")
    }))
  }
}
