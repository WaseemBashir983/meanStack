import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Location} from '@angular/common';
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
  constructor( private blogService: BlogService,
     private authService: AuthService,
     private route: ActivatedRoute,
     private location: Location,
     private router: Router
     ) {

     }

  ngOnInit() {
    this.getBlog();

  }

  createFrom() {

  }

  onBack(){
   this.location.back();
  }

  onBlogUpdate(){

    this.processing = true;

    this.blogService.updateBlog(this.blog).subscribe(data => {
      if (data.success) {
        this.message = data.message;
        this.messageClass = 'alert alert-success';

        setTimeout(() => {
          this.router.navigate(['/blog']);
        }, 2000);

      } else {
        this.message = data.message;
        this.messageClass = 'alert alert-danger';
        this.processing = false; // Allow loading of blog form
      }
  });
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
