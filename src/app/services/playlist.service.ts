import { IPlaylist } from './../interface/playlist';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISong } from '../interface/song';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private readonly API_URL = 'http://localhost:5000/api/playlists';
  private readonly API_URL1 = 'http://localhost:5000/api/myplaylists';

  constructor(private httpClient: HttpClient) {
  }

  /* ---------------- GET ALL PLAYLIST ------------------------ */
  public getAllPlaylist(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }

  /* ---------------- GET ALL MY PLAYLIST ------------------------ */
  public getAllPlaylistByUser(username: string): Observable<any> {
    return this.httpClient.get(this.API_URL1 + '?username=' + username);
  }

  /* ---------------- GET PLAYLIST BY ID ------------------------ */
  public getPlaylist(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + '/' + id);
  }

  /* ---------------- DELETE PLAYLIST ------------------------ */
  public deletePlaylist(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL1 + '/' + id);
  }

  /* ---------------- CREATE PLAYLIST ------------------------ */
  public createPlaylist(playlist: IPlaylist): Observable<any> {
    return this.httpClient.post(this.API_URL1, playlist);
  }

  /* ---------------- UPDATE PLAYLIST ------------------------ */
  public updatePlaylist(playlist: IPlaylist): Observable<any> {
    return this.httpClient.patch(this.API_URL1, playlist);
  }
  /* ---------------- Search PLAYLIST By Name ------------------------ */
  public getPlaylistByName(search: string): Observable<any> {
    return this.httpClient.get(this.API_URL + '/search?nameContains=' + search);
  }
}
