import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { VideosComponent } from "./videos/videos.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'videos/:videoGroupId',
      component: VideosComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
