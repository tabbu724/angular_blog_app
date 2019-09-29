// importing header files
import { Component, OnInit } from '@angular/core';

// importing ActivatedRoute module to access the data(blog id) from the route
import{ActivatedRoute,Router} from '@angular/router';

// decorator
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})


// class where logic is written
export class BlogViewComponent implements OnInit {
  currentBlog;

  allBlog = [{
    'blogId': "1",
    'title': "Blog 1",
    'description': "description 1",
    'createdBy': 'admin',
    'time': 'Jun 15, 2015, 9:03:01 AM',
    'views': 0,
    'category': "environment",
    "tags":['global warming','sustainable development','carbon footprint'],
    "bodyHtml":"This is blog body"
  },
  {
    'blogId': '2',
    'title': "Blog 2",
    'description': "description 2",
    'createdBy': 'admin',
    'time': 'Jul 15, 2015, 9:03:01 AM',
    'views': 1,
    'category': 'comedy',
    "tags":[],
    "bodyHtml":"This is blog body"
  },
  {
    'blogId': '3',
    'title': "Blog 3",
    'description': "description 3",
    'createdBy': 'admin',
    'time': 'Aug 15, 2015, 9:03:01 AM',
    'views': 2,
    'category': 'politics',
    "tags":[],
    "bodyHtml":"This is blog body"
  }];

  constructor(private _route:ActivatedRoute, private router:Router) { 
    // console.log("constructor is called");
    
  }

  ngOnInit() {
    // console.log("ngOnInit is called");
    let blogId = this._route.snapshot.paramMap.get('blogId');
    // console.log(blogId);
    this.getSingleBlogInfo(blogId);
    
  }

  getSingleBlogInfo = (currentBlogId):any=>{
    for(let blog of this.allBlog){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
    
    console.log("current blog",this.currentBlog);
  }

}
