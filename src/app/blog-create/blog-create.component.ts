import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from "../blog-http.service";
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute ,Router} from "@angular/router";

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public title:string;
  public description:string;
  public blogBody:string;
  public category:string;
  public categoryValues=['comedy','technology','environment','politics'];
  
  constructor(private http_service:BlogHttpService,private toastr: ToastrService,
    private _aroute:ActivatedRoute , private route:Router) {  }
  
  getBlogdata=()=>{
    let blogData = {
      title:this.title,
      description:this.description,
      blogBody:this.blogBody,
      category:this.category
    }
    
    this.http_service.createBlog(blogData).subscribe(
      data=>{
        this.toastr.success('Blog Created Successfully!', 'Success!');
        setTimeout(() => {
          this.route.navigate(['/blog',data['data'].blogId]);
        }, 2000);
        
        console.log(data);
        
      },
      error=>{
        this.toastr.error('Some error occurred!', 'Oops!');
        this.http_service.handleError(error);
      }
    );
  }
  ngOnInit() {
    console.log('blog create component initialised');
  }

}
