import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ISong} from '../interface/song';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private readonly API_URL = 'http://localhost:5000/api/songs/';

  constructor(private httpClient: HttpClient) {
  }

  /* ---------------- GET ALL SONG ------------------------ */
  public getAllSong(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }

  /* ---------------- GET SONG BY ID ------------------------ */
  public getSong(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + id);
  }

  /* ---------------- DELETE SONG ------------------------ */
  public deleteSong(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + id);
  }

  /* ---------------- CREATE SONG ------------------------ */
  public createSong(song: ISong): Observable<any> {
    return this.httpClient.post(this.API_URL, song);
  }

  /* ---------------- UPDATE SONG ------------------------ */
  public updateSong(song: ISong): Observable<any> {
    return this.httpClient.patch(this.API_URL, song);
  }

}
