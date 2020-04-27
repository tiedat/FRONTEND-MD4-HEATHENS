import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(
        private httpClient: HttpClient
    ) {
    }
    authenticate(username: any, password: any) {
        return this.httpClient.post<any>('http://localhost:5000/authenticate', { username, password }, { responseType: 'text' as 'json' })
            .pipe(map(token => {
                const tokenStr = 'Bearer ' + token;
                localStorage.setItem('token', tokenStr);
                localStorage.setItem('username', username);
                return tokenStr;
            }));
    }
    isUserLoggedIn() {
        const user = localStorage.getItem('username');
        return !(user === null);
    }
    logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    }
}
