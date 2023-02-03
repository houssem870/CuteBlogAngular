import { Injectable } from '@angular/core';
import { data } from 'src/app/model/testdatasource';
import { HttpClient } from '@angular/common/http';
import { blog } from '../model/blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http : HttpClient) { }

  addBlog(data:blog) {
    /*return new Promise(resolve => {
     this.http.post(this.url + '/', data).subscribe((res: any) => {
        resolve({ status: true, data: res });
      }, (err:any) => {
        resolve({ status: false, error: err });
      });
    });*/
    return true ;
  }

  getBlogs() {
    /*return new Promise(resolve => {
      this.http.get(this.url).subscribe((res: any) => {
        resolve({ status: true, data: res });
      }, (err:any) => {
        resolve({ status: false, error: err });
      });
    });*/
    return data ;
  }

  
  getBlogById(id:string) {
   /* return new Promise(resolve => {
      this.http.get(this.url+ '/' + id).subscribe((res: any) => {
        resolve({ status: true, data: res });
      }, (err:any) => {
        resolve({ status: false, error: err });
      });
    });*/
    console.log(data[id])
    return data[id] ;
  }


}
