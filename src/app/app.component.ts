import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentiation.service';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FRONT-END-MD4-HEATHENS';
  formGroup = new FormGroup({
    searchName: new FormControl(),
  });

  isLoggedIn = false;
  isPlay: boolean;
  username: string;
  searchName: any;

  constructor(
    private route: Router,
    private authService: AuthenticationService,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.loginToggle();
    this.playerService.isPlay$.subscribe(isPlay => this.isPlay = isPlay);
  }

  loginToggle() {
    if (this.authService.isUserLoggedIn()) {
      this.isLoggedIn = true;
      this.username = localStorage.getItem('username');
    } else {
      this.isLoggedIn = false;
    }
    console.log(this.isLoggedIn);
  }

  search() {
    const searchValue = this.formGroup.get('searchName').value;
    console.log(searchValue);
    this.route.navigate(['search'], { queryParams: { search: searchValue } }).then((e) => {
      console.log('Navigation is successful!');
    });
  }

  logout() {
    this.authService.logOut();
    location.reload();
  }
}
