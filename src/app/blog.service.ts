import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  allBlog = [{
    'blogId': "1",
    'title': "Blog 1",
    'description': "description 1",
    'createdBy': 'admin',
    'time': 'Jun 15, 2015, 9:03:01 AM',
    'views': 0,
    'category': 'environment',
    "tags":['global warming','carbon footprint','sustainable development'],
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
  }]

  constructor() { 
    console.log("blog service initialised");
    
  }

  getAllBlogs=()=>{
    return this.allBlog;
  }

  getSingleBlogInfo = (currentBlogId):any=>{
    for(let blog of this.allBlog){
      if(blog.blogId == currentBlogId){
        // this.currentBlog = blog;
        return blog;
      }
    }
  }


}
