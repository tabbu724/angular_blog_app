import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

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
  constructor(public blogservice:BlogService) { 
    console.log("home component constructor called");
    
  }

  ngOnInit() {
    console.log("home componenet initiated");
    this.allBlogs=this.blogservice.getAllBlogs();
    console.log(this.allBlogs);
    
  }

}
