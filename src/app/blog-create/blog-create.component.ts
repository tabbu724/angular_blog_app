import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from "../blog-http.service";

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
  
  constructor(public http_service:BlogHttpService) {  }
  
  getBlogdata=()=>{
    let blogData = {
      title:this.title,
      description:this.description,
      blogBody:this.blogBody,
      category:this.category
    }
    
    this.http_service.createBlog(blogData).subscribe(
      data=>{
        console.log("blog posted successfully");
        console.log(data);
        
      },
      error=>{
        console.log("some error occurred");
        this.http_service.handleError(error);
      }
    );
  }
  ngOnInit() {
    console.log('blog create component initialised');
  }

}
