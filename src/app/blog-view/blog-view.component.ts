// importing header files
import { Component, OnInit, OnDestroy } from '@angular/core';

// importing ActivatedRoute module to access the data(blog id) from the route
import{ActivatedRoute,Router} from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from "../blog-http.service";
// decorator
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})


// class where logic is written
export class BlogViewComponent implements OnInit ,OnDestroy{
  ngOnDestroy(): void {
    console.log("Blog view component destroyed");
    
  }
  currentBlog;

  constructor(private _route:ActivatedRoute, private router:Router ,public blogservice:BlogService,public httpservice:BlogHttpService) { 
    console.log("blog view constructor is called");

    
  }

  ngOnInit() {
    console.log("blog view component ngOnInit is called");
    let blogId = this._route.snapshot.paramMap.get('blogId');
    // console.log(blogId);
    // this.currentBlog =this.blogservice.getSingleBlogInfo(blogId)
    this.currentBlog = this.httpservice.getSingleBlogInfo(blogId);
    console.log(this.currentBlog);
    
  }

  

}
