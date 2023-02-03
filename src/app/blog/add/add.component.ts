import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addBlogForm!: FormGroup;
  constructor(private service : BlogService , private router :Router) { }

  ngOnInit(): void {
    this.addBlogForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      content: new FormControl('')
  });
  }

  onSubmit() {
    if(this.service.addBlog(this.addBlogForm.value)){
      swal.fire('done','blog added successfully','success');
      setTimeout(() => {
        this.router.navigate([""]);
      }, 500);
      
    }

    
    console.log(this.addBlogForm.value);
    // send data to the server
}

}
