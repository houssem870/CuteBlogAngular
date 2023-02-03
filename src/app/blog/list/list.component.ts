import { Component } from '@angular/core';
import { blog } from 'src/app/model/blog';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  blogs: Array<blog> = [];

  constructor(private service :BlogService) { }

  ngOnInit(): void {
    this.loadBlogs();
   // this.blogs= data;
  }

  loadBlogs(){
    this.blogs = this.service.getBlogs();
    
  }



  incrementUpvote(blog) {
    blog.upvotes += 1;
    this.setBlogStyle(blog);
  }

  incrementDownvote(blog) {
    blog.downvotes += 1;
    this.setBlogStyle(blog);
  }
  delete(id:any){}
   

  setBlogStyle(blog) {
    if (blog.upvotes > blog.downvotes) {
      blog.style = 'green';
    } else {
      blog.style = 'red';
    }
  }
}
