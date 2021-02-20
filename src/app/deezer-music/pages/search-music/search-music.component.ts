import { Component, OnInit } from '@angular/core';

import { Song } from '../../interfaces/songs.interface';
import { DeezerService } from '../../services/deezer.service';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {

  texto: string = '';
  cancion!: Song;
  cancionEnReproducion!: Song;
  // audioEnReproduccion!: Audio;

  constructor(
    private deezerService: DeezerService
  ) { }

  ngOnInit(): void {
  }

  buscar(): void{
    if( this.texto.trim().length === 0 ){
      return;
    }
    this.deezerService.searchSongByName( this.texto.trim() )
      .subscribe(
        ( response ) => {
          this.cancion = response.data[0];
        }
      );
  }

  cancionSeleccionada( event: Song ): void{
    this.cancionEnReproducion = Object.assign({}, this.cancion);
  }
}
