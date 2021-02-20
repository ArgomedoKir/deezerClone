import { Component, Input, SimpleChanges } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

import { Song } from '../../interfaces/songs.interface';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent {

  @Input('data') cancion!: Song;
  audio!: HTMLAudioElement;
  volumenIcons: string = 'volume_up';
  mute: boolean = false;
  volumen: number = 100;

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

  ajustarVolumen( event: MatSliderChange ): void{
    this.mute = false;
    this.volumen = event.value!;
    this.audio.volume = this.volumen / 100;
    this.setIcon();
  }

  muteVolumen(){
    this.mute = !this.mute;
    if( this.mute ){
      this.audio.volume = 0;
    }else{
      this.audio.volume = this.volumen / 100;
    }
    this.setIcon();
  }

  setIcon(): void{
    if( this.mute ){
      this.volumenIcons = 'volume_off';
    }else{
      if( this.audio.volume > 0.75 ){
        this.volumenIcons = 'volume_up';
      }else if( this.audio.volume > 0.05){
        this.volumenIcons = 'volume_down';
      }else{
        this.volumenIcons = 'volume_mute';
      }
    }
  }
}
