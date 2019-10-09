// importing header files
import { Component, OnInit, OnDestroy } from '@angular/core';

// importing ActivatedRoute module to access the data(blog id) from the route
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from "../blog-http.service";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
// decorator
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})


// class where logic is written
export class BlogViewComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log("Blog view component destroyed");

  }
  currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, public blogservice: BlogService, public httpservice: BlogHttpService, private tostr: ToastrService ,private location:Location) {
    console.log("blog view constructor is called");


  }

  public deleteThisBlog = () => {
    let blogId = this._route.snapshot.paramMap.get('blogId');
    this.httpservice.deleteblog(blogId).subscribe(
      data => {
        console.log(data);
        this.tostr.success("Blog deleted successfully", 'success');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      },
      error => {
        this.tostr.warning("Blog could not be deleted", "Error");
        this.httpservice.handleError(error);
      }
    );
  }

  public goBack=()=>{
    this.location.back();
  }

  ngOnInit() {
    console.log("blog view component ngOnInit is called");
    let blogId = this._route.snapshot.paramMap.get('blogId');
    console.log(blogId);
    //to view single blog
    this.currentBlog = this.httpservice.getSingleBlogInfo(blogId).subscribe(
      data => {
        this.currentBlog = data['data'];
      },
      error => {
        this.httpservice.handleError(error);
      }
    );



  }



}
