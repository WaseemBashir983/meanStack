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

getBlogs(pageNo, size) {

  const params = {
    pageNo: pageNo,
    size: size
  };

  this.authService.addAuthHeaders();
  return this.http.get(this.authService.apiUrl + 'api/blog/getBlogs'  , this.authService.options).pipe(map(res => res.json()));

}


getBlog(id: string) {
  this.authService.addAuthHeaders();
  return this.http.get(this.authService.apiUrl + 'api/blog/get/' + id ,  this.authService.options).pipe(map(res => res.json()));
}

updateBlog(blog: any) {
  this.authService.addAuthHeaders();

  return this.http.put(this.authService.apiUrl + 'api/blog/updateBlog/' , blog , this.authService.options).pipe(map(res => res.json()));
}

deleteBlog(id: string) {
  this.authService.addAuthHeaders();
  return this.http.delete(this.authService.apiUrl + 'api/blog/delete/' + id ,  this.authService.options).pipe(map(res => res.json()));
}


likeBlog(id: string) {
  const data = {id: id};
  this.authService.addAuthHeaders();
  return this.http.put(this.authService.apiUrl + 'api/blog/like/' , data,   this.authService.options).pipe(map(res => res.json()));
}
dislikeBlog(id: string) {
  const data = {id: id};
  this.authService.addAuthHeaders();
  return this.http.put(this.authService.apiUrl + 'api/blog/dislike/'  , data,  this.authService.options).pipe(map(res => res.json()));
}


searchBlog(searchTerm: string) {
  const data = {term: searchTerm};
  this.authService.addAuthHeaders();
  return this.http.post(this.authService.apiUrl + 'api/blog/search/'  , data,  this.authService.options).pipe(map(res => res.json()));
}

}
