import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  form: FormGroup;
  message: string;
  MessageCalss: string;
  newPost: boolean = false;
  loadingBlog: boolean = false;
  processing: boolean  = false;
  blogPosts;


  constructor(private formBuilder: FormBuilder, private blogService: BlogService, private authService: AuthService) { }

  ngOnInit() {
    this.createFrom();
    this.getBlogs();
  }


  createFrom() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      body: ['', [Validators.required]
    })
  }

  onBlogSubmit() {
    this.processing = true;
    const blog = {
      'title': this.form.get('title').value,
      'body': this.form.get('body').value,
      'createdBy': this.authService.getUserName()
    };


    this.blogService.createBlog(blog).subscribe(data => {
      if (data.success) {
          this.message = data.message;
          this.MessageCalss = 'alert alert-success';
          this.getBlogs();
          setTimeout(() => {
            this.newPost = false;
            this.processing = false;
            this.message = '';
            this.MessageCalss = '';
            this.form.reset();
          }, 4000);


      } else {
        this.message = data.message;
        this.MessageCalss = 'alert alert-danger';
        this.processing = false;
      }
  });

  }

  onCreate() {
    this.newPost = true;
  }

  onReload(){

    this.loadingBlog = true;
    this.getBlogs();
    setTimeout(() => {
      this.loadingBlog = false;
    }, 4000);
  }
  onCancel(){
   window.location.reload();
  }

getBlogs() {
  this.blogService.getBlogs().subscribe(data => {
    if (data.success) {
      this.blogPosts = data.blogs;
    } else {
    }
});
}

}
