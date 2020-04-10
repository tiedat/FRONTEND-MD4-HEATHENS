import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  getValue<T>(key: string): T {
    const obj = JSON.parse(this.storage.getItem[key] || null);
    return obj as T;
  }

  setObject(key: string, value: any): void {
    this.storage[key] = JSON.stringify(value);
  }
}
