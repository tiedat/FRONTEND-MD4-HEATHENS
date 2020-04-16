import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  getValue(key: string) {
    const obj = JSON.parse(this.storage.getItem[key] || null);
    return obj;
  }

  setObject(key: string, value: any): void {
    this.storage[key] = JSON.stringify(value);
  }
}
