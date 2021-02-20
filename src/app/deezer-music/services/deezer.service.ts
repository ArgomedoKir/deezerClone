import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ResponseSearch } from '../interfaces/songs.interface';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ){}

  searchSong( query: string ): Observable<ResponseSearch>{
    const params = new HttpParams()
      .set('q', query);
    return this.http.get<ResponseSearch>(`${this.baseUrl}/search`, { params });
  }

  searchSongByAlbum( album: string ): Observable<ResponseSearch>{
    const params = new HttpParams()
      .set('q', `album:"${ album }"`);
    return this.http.get<ResponseSearch>(`${this.baseUrl}/search`, { params });
  }

  searchSongByName( name: string ): Observable<ResponseSearch>{
    const params = new HttpParams()
      .set('q', `track:"${ name }"`);
    return this.http.get<ResponseSearch>(`${this.baseUrl}/search`, { params });
  }
}
