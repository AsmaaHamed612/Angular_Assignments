import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from '../Shared-Classes-and-types/IPost';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _httpClient:HttpClient) { }

  GetPostComment(id:any):Observable<IPost[]>
  {
    return this._httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts/'+id+'/comments').pipe(catchError((err)=>{
      return throwError(()=>err.message||"Server Erorr")
  }))

}
}

