import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/serivces/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  id: number | undefined;
  private subscription: Subscription;
  currentPost: Post;

  constructor(private activateRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router){
       
      this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }

  getCurrentPost() {
    this.postService.getPosts()
      .subscribe((data: Post[]) => {
        this.currentPost = data.find(item => item.id == this.id);
      });
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.getCurrentPost()
  }

}
