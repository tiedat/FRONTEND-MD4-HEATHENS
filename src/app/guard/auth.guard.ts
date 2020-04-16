import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) { }

  canActivate() {
    if (this.authService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;

  }
}
