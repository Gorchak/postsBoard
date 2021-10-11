import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Post } from 'src/app/models/post';
import { CategoriesService } from 'src/app/serivces/categories.service';
import { PostService } from 'src/app/serivces/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private postService: PostService,
    private categoriesService: CategoriesService
  ) { }

  postsData: Post [];
  categoriesData: Category [];
  selectedCategory: Category;
  descendingOrderBy = false;

  showPosts() {
    this.postService.getPosts()
      .subscribe((data: Post[]) => {
        this.postsData = this.selectedCategory ? data.filter(item => item.category == this.selectedCategory.id) : data;
      });
  }

  clickSelectCategory(item){
    this.selectedCategory = item;
    this.showPosts()
  }

  showCategories() {
    this.categoriesService.getCategories()
    .subscribe((categories: Category []) => {
      this.categoriesData = categories;
      this.showPosts();
    });
  }

  ngOnInit(): void {
    this.showCategories();
  }

}
