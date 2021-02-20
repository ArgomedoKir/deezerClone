import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { SearchMusicComponent } from './pages/search-music/search-music.component';
import { MusicCardComponent } from './components/music-card/music-card.component';
import { MusicPlayerComponent } from './shared/music-player/music-player.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { MaterialModule } from '../material/material.module';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { SearchAlbumsComponent } from './pages/search-albums/search-albums.component';
import { DeezerRoutingModule } from './deezer-routing.module';




@NgModule({
  declarations: [
    SearchMusicComponent,
    MusicCardComponent,
    MusicPlayerComponent,
    SideBarComponent,
    InputSearchComponent,
    SearchAlbumsComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    RouterModule,
    DeezerRoutingModule
  ],
  exports:[
    SearchMusicComponent
  ]
})
export class DeezerMusicModule { }
