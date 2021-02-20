import { Component, Input, SimpleChanges } from '@angular/core';

import { Song } from '../../interfaces/songs.interface';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent {

  @Input('data') cancion!: Song;
  audio!: HTMLAudioElement;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if( this.audio ){
      this.detener();
    }
    this.reproducir(changes.cancion.currentValue);
  }

  detener(){
    this.audio.pause();
  }

  reproducir( cancion?: Song ): void{
    if( cancion ){
      this.audio = new Audio(cancion.preview);
      this.audio.play();
    }else{
      this.audio = new Audio(this.cancion.preview);
    this.audio.play();
    }
  }

}
