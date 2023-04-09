import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../Services/posts.service';
import { IPost } from '../Shared-Classes-and-types/IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostsService, private router:Router
    ){}

  PostsList:IPost[]=[];

  ngOnInit() {
    this.postService.GetPostsData().subscribe((data)=>{
     console.log(data)
     this.PostsList=data
    });
  }

  selectedPost(item:any)
  {
     this.router.navigate(['/post',item.id])
  }

}

