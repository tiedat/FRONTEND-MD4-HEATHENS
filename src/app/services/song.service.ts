import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISong } from '../interface/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private readonly API_URL = 'http://localhost:5000/api/songs';
  private readonly API_URL1 = 'http://localhost:5000/api/mysongs';

  constructor(private httpClient: HttpClient) {
  }

  /* ---------------- GET ALL SONG ------------------------ */
  public getAllSong(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }

  /* ---------------- GET ALL MY SONG ------------------------ */
  public getAllSongByUser(username: string): Observable<any> {
    return this.httpClient.get(this.API_URL1 + '?username=' + username);
  }

  /* ---------------- GET SONG BY ID ------------------------ */
  public getSong(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + '/' + id);
  }

  /* ---------------- DELETE SONG ------------------------ */
  public deleteSong(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL1 + '/' + id);
  }

  /* ---------------- CREATE SONG ------------------------ */
  public createSong(song: ISong): Observable<any> {
    return this.httpClient.post(this.API_URL1, song);
  }

  /* ---------------- UPDATE SONG ------------------------ */
  public updateSong(song: ISong): Observable<any> {
    return this.httpClient.patch(this.API_URL1, song);
  }
  /* ---------------- Search Song By Name ------------------------ */
  public getSongByName(search: string): Observable<any> {
    return this.httpClient.get(this.API_URL + '/search?nameContains=' + search);
  }

  /* ----------------- Get Newest Song --------------------- */
  public getNewestSong(): Observable<any> {
    return this.httpClient.get(this.API_URL + '/top20Newest');
  }

  /*------------------ Get 20 Most Listening ------------------*/
  public getMostListening(): Observable<any> {
    return this.httpClient.get(this.API_URL + '/top20');
  }
}
