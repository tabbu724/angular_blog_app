import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { BlogHttpService } from "../blog-http.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
public currentBlog;
public categories=['comedy','technology','environment','politics'];
  constructor(private _router:Router,private service:BlogHttpService ,private active:ActivatedRoute,private toastr:ToastrService) { }

  public editThisBlog=()=>{
    this.service.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data=>{
        this.toastr.success("blog edited",'success');
        console.log(data);
        setTimeout(() => {
          this._router.navigate(['/blog',this.currentBlog.blogId]);
        }, 2000);
      },
      error=>{
        this.toastr.warning('error occurred','edit failed');
        this.service.handleError(error);
      }
    );
  }
  ngOnInit() {
    let blogid = this.active.snapshot.paramMap.get('blogId')
    this.service.getSingleBlogInfo(blogid).subscribe(
      data=>{
        this.currentBlog = data['data'];
        console.log('edit blog data',this.currentBlog); 
      },
      error=>{
        this.service.handleError(error);
      }
    );
    
  }

}
