import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISong } from '../interface/song';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://localhost:5000/api/users';
  private readonly API_URL1 = 'http://localhost:5000/authenticate';

  constructor(private httpClient: HttpClient) {
  }
  /* ---------------- GET USER BY USERNAME ------------------------ */
  public getUserByUsername(username: string): Observable<any> {
    return this.httpClient.get(this.API_URL + '?username=' + username, {});
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
    return this.httpClient.post(this.API_URL, user);
  }
  /* ---------------- UPDATE USER ------------------------ */
  public updateUser(user: IUser): Observable<any> {
    return this.httpClient.patch(this.API_URL, user);
  }

  public generateToken(request) {
    return this.httpClient.post(this.API_URL1, request, { responseType: 'text' as 'json' });
  }

  public getHeader(tokens) {
    const tokensStr = 'Bearer' + tokens;
    const header = new HttpHeaders().set('Authorization', tokensStr);
    return header;
  }
}
