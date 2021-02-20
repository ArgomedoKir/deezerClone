import { Component } from '@angular/core';

import { Song } from '../../interfaces/songs.interface';
import { DeezerService } from '../../services/deezer.service';

@Component({
  selector: 'app-search-albums',
  templateUrl: './search-albums.component.html',
  styleUrls: ['./search-albums.component.css']
})
export class SearchAlbumsComponent {

  cancion!: Song;
  cancionEnReproducion!: Song;
  textHolder = "Ingrese el nombre de un álbum"

  constructor(
    private deezerService: DeezerService
  ) { }

  buscar( termino: string ): void{
    this.deezerService.searchSongByAlbum( termino )
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
