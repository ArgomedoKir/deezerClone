import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SearchAlbumsComponent } from "./pages/search-albums/search-albums.component";
import { SearchMusicComponent } from "./pages/search-music/search-music.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'track',
        component: SearchMusicComponent
      },
      {
        path: 'album',
        component: SearchAlbumsComponent
      },
      {
        path: '**',
        redirectTo: 'track'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ],
})
export class DeezerRoutingModule{}
