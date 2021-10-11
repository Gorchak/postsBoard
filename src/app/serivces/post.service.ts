import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  configUrl = 'assets/Posts.json';

  getPosts() {
    return this.http.get<Post[]>(this.configUrl);
  }

}
