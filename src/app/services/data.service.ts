import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  username = new BehaviorSubject<string>('default message');
  currentMessage = this.username.asObservable();
  constructor() { }
  changeMessage(username) {
    this.username.next(username);
  }
}
