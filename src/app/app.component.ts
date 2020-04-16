import { AuthenticationService } from './services/authentication.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';

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
  username: string;
  searchName: any;
  constructor(private userService: UserService,
    private route: Router,
    private data: DataService,
    private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.loginToggle();
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
