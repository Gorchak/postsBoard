import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostService } from './serivces/post.service';
import { CategoriesService } from './serivces/categories.service';
import { SortByPipe } from './pipes/sort-by.pipe';
import { PostPageComponent } from './components/post-page/post-page.component';

import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes =[
  { path: '', component: DashboardComponent},
  { path: 'post/:id', component: PostPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SortByPipe,
    PostPageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
