import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IndexComponent } from './index/index.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'',component:IndexComponent},
  {path:'index',component:IndexComponent},
  {path:'contact',component:ContactComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'room',component:RoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
