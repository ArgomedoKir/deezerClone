import { Component } from '@angular/core';

import { Song } from '../../interfaces/songs.interface';
import { DeezerService } from '../../services/deezer.service';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent {

  cancion!: Song;
  cancionEnReproducion!: Song;
  textHolder = "Escribe un nombre de una canción";

  constructor(
    private deezerService: DeezerService
  ) { }

  buscar( termino: string ): void{
    this.deezerService.searchSongByName( termino )
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
