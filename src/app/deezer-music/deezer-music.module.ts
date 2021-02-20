import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { SearchMusicComponent } from './pages/search-music/search-music.component';
import { MusicCardComponent } from './components/music-card/music-card.component';
import { MusicPlayerComponent } from './shared/music-player/music-player.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';




@NgModule({
  declarations: [SearchMusicComponent, MusicCardComponent, MusicPlayerComponent, SideBarComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports:[
    SearchMusicComponent
  ]
})
export class DeezerMusicModule { }
