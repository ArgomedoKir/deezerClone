import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => import('./deezer-music/deezer-music.module').then( m => m.DeezerMusicModule )
  },
  {
    path: '**',
    redirectTo: 'search',
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
