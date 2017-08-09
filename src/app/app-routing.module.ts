import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { VideosComponent } from "./videos/videos.component";
import { PhotosComponent } from "./photos/photos.component";
import { BiosComponent } from "./bios/bios.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'videos/:id',
        component: VideosComponent
      },
      {
        path: 'photos/:id',
        component: PhotosComponent
      },
      {
        path: 'bios/:id',
        component: BiosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
