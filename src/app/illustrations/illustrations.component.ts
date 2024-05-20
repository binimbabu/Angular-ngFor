import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss']
})
export class IllustrationsComponent {

  posts? :any;
  constructor(private postService : PostsService){
  }
fetch(){
  this.postService.getPosts().subscribe((data:any)=>{
    
    this.posts = data;
  })
  
    return this.posts;
}
}
