import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private authService: AuthService, private http: Http) { }

  createBlog(blog) {
    this.authService.addAuthHeaders();

    return this.http.post(this.authService.apiUrl + 'api/blog/createBlog/' , blog , this.authService.options).pipe(map(res => res.json()));
  }

getBlogs() {

  this.authService.addAuthHeaders();
  return this.http.get(this.authService.apiUrl + 'api/blog/getBlogs' , this.authService.options).pipe(map(res => res.json()));

}


}
