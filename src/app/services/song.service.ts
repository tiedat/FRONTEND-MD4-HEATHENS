import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SongService {
  apiUrl = '';
  constructor(private httpClient: HttpClient) { }
}
