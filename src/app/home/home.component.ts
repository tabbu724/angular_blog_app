import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from "../blog-http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy {
  ngOnDestroy(): void {
    console.log("home component destroyed");
  }
  allBlogs;
  constructor(public blogservice:BlogHttpService) { 
    console.log("home component constructor called");
    
  }

  ngOnInit() {
    console.log("home componenet initiated");
    this.allBlogs=this.blogservice.getAllBlogs().subscribe(
      data=>{
        console.log("logging data");
        console.log(data);
        this.allBlogs = data["data"]
        
      },
      error=>{
        this.blogservice.handleError(error);
      }
    );
    console.log(this.allBlogs);
    
  }

}
