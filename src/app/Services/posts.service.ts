import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from '../Shared-Classes-and-types/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _httpClient:HttpClient) { }

  GetPostsData():Observable<IPost[]>
  {
    return this._httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts').pipe(catchError((err)=>{
      return throwError(()=>err.message||"Server Erorr")
}))
  }
}
