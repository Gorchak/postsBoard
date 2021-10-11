import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  configUrl = 'assets/Categories.json';

  getCategories() {
    return this.http.get<Category[]>(this.configUrl);
  }


}
