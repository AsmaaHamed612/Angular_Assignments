import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { IPost } from '../Shared-Classes-and-types/IPost';
import { CommentsService } from '../Services/comments.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentComponent implements OnInit{

  PostId:any
  CommentList:IPost[]=[]
  erorrMessage:string=''

constructor(private activatedRoute:ActivatedRoute,private commentservice:CommentsService){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.PostId=params.get("id");

      this.commentservice.GetPostComment(this.PostId).subscribe({
        next:(data: IPost[])=>this.CommentList=data,
        error:(erorr: string)=>this.erorrMessage=erorr
    })
  })


  }





}
