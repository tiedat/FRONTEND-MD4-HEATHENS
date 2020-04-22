import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISong } from '../interface/song';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://localhost:5000/api/users';

  constructor(private httpClient: HttpClient) {
  }
  /* ---------------- GET USER BY USERNAME ------------------------ */
  public getUserByUsername(username: string): Observable<any> {
    return this.httpClient.get(this.API_URL + '?username=' + username);
  }
  /* ---------------- GET USER BY ID ------------------------ */
  public getUser(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + id);
  }
  /* ---------------- DELETE USER ------------------------ */
  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + id);
  }
  /* ---------------- CREATE USER ------------------------ */
  public createUser(user: IUser): Observable<any> {
    return this.httpClient.post(this.API_URL + '/add', user);
  }
  /* ---------------- UPDATE USER ------------------------ */
  public updateUser(user: IUser): Observable<any> {
    return this.httpClient.patch(this.API_URL, user);
  }
}
