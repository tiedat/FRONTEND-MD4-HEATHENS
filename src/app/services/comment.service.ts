import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICmt } from '../interface/cmt';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly API_URL = 'http://localhost:5000/api/cmtsong/';
  private readonly API_URL1 = 'http://localhost:5000/api/cmtpls/';


  constructor(private httpClient: HttpClient) {
  }

  /* ---------------- GET ALL CMTPLAYLIST  ------------------------ */
  public getAllCmtPlaylist(idPlaylist: number): Observable<any> {
    return this.httpClient.get(this.API_URL1 + '?idPlaylist=' + idPlaylist);
  }

  /* ---------------- GET CMTPLAYLIST BY ID ------------------------ */
  public getCmtPlaylist(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL1 + 'id');
  }


  /* ---------------- DELETE CMTPLAYLIST ------------------------ */
  public deleteCmtPlaylist(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL1 + 'id');
  }

  /* ---------------- CREATE CMTPLAYLIST ------------------------ */
  public createCmtPlaylist(cmtPlaylist: ICmt): Observable<any> {
    return this.httpClient.post(this.API_URL1, cmtPlaylist);
  }

  /* ---------------- UPDATE CMTPLAYLIST ------------------------ */
  public updateCmtPlaylist(cmtPlaylist: ICmt): Observable<any> {
    return this.httpClient.patch(this.API_URL1, cmtPlaylist);
  }

  /* ---------------- GET ALL CMTSONG  ------------------------ */
  public getAllCmtSong(idSong: number): Observable<any> {
    return this.httpClient.get(this.API_URL + '?idSong=' + idSong);
  }

  /* ---------------- GET CMTSONG BY ID ------------------------ */
  public getCmtSong(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + 'id');
  }


  /* ---------------- DELETE CMTSONG ------------------------ */
  public deleteCmtSong(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + 'id');
  }

  /* ---------------- CREATE CMTSONG ------------------------ */
  public createCmtSong(cmtSong: ICmt): Observable<any> {
    return this.httpClient.post(this.API_URL, cmtSong);
  }

  /* ---------------- UPDATE CMTSONG ------------------------ */
  public updateCmtSong(cmtSong: ICmt): Observable<any> {
    return this.httpClient.patch(this.API_URL, cmtSong);
  }
}
