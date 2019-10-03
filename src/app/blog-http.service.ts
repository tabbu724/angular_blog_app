import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpClientModule} from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { catchError , tap } from '../../node_modules/rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs:any;

  public currentBlog:any;

  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';

  constructor(public _http:HttpClient) {
    
   }

  getAllBlogs=():any=>{
    let response = this._http.get(this.baseUrl+'/all?authToken=ZDM4MzNiZWJmMGEyOTRkMGI0MWQxMWIzMWQ4ZGUyMThlN2ViYTJiNjIzMjQ3ZmJlZjNhNTIxZDA0YjE2OGNmNDliNzk0NjNmYmE4Nzk3ZTk1YmZlMGMzYjIxNWVlZmU2YWU3YjgzZDQ3YzI0OTc2MzgzM2ZjNzJiMWI2NjY2Y2QwMg==')
    console.log(response);
    return response;
    
  }

  getSingleBlogInfo = (currentBlogId:string):any=>{
    
  }
}
