import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SearchMusicComponent } from "./deezer-music/pages/search-music/search-music.component";


const routes: Routes = [
  {
    path: '',
    component: SearchMusicComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule{}
