import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { catchError, tap } from '../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs: any;

  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';

  private token = 'ZDM4MzNiZWJmMGEyOTRkMGI0MWQxMWIzMWQ4ZGUyMThlN2ViYTJiNjIzMjQ3ZmJlZjNhNTIxZDA0YjE2OGNmNDliNzk0NjNmYmE4Nzk3ZTk1YmZlMGMzYjIxNWVlZmU2YWU3YjgzZDQ3YzI0OTc2MzgzM2ZjNzJiMWI2NjY2Y2QwMg=='

  constructor(public _http: HttpClient) {
    console.log("http service initialised");
    
  }

  // exception handler
  public handleError=(err :HttpErrorResponse)=>{
    console.log("handling errors");
    console.log(err.message);
    return Observable.throw(err.message);
    
  }

  getAllBlogs = (): any => {
    let response = this._http.get(this.baseUrl + '/all?authToken='+this.token)
    return response;
  }

  getSingleBlogInfo = (currentBlogId: string): any => {
    console.log("single blog method called");
    let response = this._http.get(this.baseUrl + '/view/'+currentBlogId+'?authToken='+this.token)
    return response;
  }

  createBlog=(blogData)=>{
    let response = this._http.post(this.baseUrl +'/create?authToken='+this.token,blogData)
    return response;
  }

  editBlog=(currentBlogId: string,blogData)=>{
    let response = this._http.put(this.baseUrl+'/'+currentBlogId+'/edit?authToken='+this.token,blogData)
    return response;
  }

  deleteblog=(currentBlogId: string)=>{
    let response = this._http.post(this.baseUrl + '/'+currentBlogId+'/delete'+'?authToken='+this.token,'');
    return response;
  }

}
