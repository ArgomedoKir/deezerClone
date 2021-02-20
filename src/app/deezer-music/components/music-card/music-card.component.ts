import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from '../../interfaces/songs.interface';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent {

  @Input('data') cancion!: Song;
  @Output('selecionCancion') eventoSelecionar: EventEmitter<Song> = new EventEmitter<Song>()

  constructor() { }

  seleccionarCancion(): void{
    this.eventoSelecionar.emit( this.cancion );
  }
}
