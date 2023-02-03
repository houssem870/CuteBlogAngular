import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { blog } from 'src/app/model/blog';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {
  id:any;
  myblog! :blog;
  constructor(private service : BlogService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getBlogById();
  }
  getBlogById(){
   this.myblog = this.service.getBlogById(this.id);
  }

}
