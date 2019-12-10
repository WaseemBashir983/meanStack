import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from '../../../services/blog.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  message = '';
  messageClass = '';
  processing = false;
  blog;
  curruntUrl;
  loading = true;
  constructor( private blogService: BlogService, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBlog();

  }

  createFrom() {

  }

  onCancel(){

  }

  onBlogUpdate(){

    this.processing = true;

  }

getBlog() {
  const id  = this.route.snapshot.paramMap.get('id');
  this.blogService.getBlog(id).subscribe(data => {
    if (data.success) {
         this.blog  = data.blog;
         this.loading = false; // Allow loading of blog form
    } else {
      this.message = 'Blog not found';
      this.messageClass = 'alert alert-danger';

    }
});


}


}
