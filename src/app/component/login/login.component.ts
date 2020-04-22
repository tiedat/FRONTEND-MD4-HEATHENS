import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interface/user';
import { DataService } from '../../services/data.service';
import { AuthenticationService } from 'src/app/services/authentiation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl()
  });
  message = '';
  isShow = false;
  isSuccess = true;

  constructor(
    private route: Router,
    private authService: AuthenticationService) {
  }

  ngOnInit(): void { }

  checkUser() {
    const userName = this.formGroup.get('userName').value;
    const password = this.formGroup.get('password').value;
    this.authService.authenticate(userName, password).subscribe(
      success => {
        this.route.navigate(['/home']).then(() => {
          location.reload();
        });
      },
      error => {
        this.isShow = true;
        this.isSuccess = false;
        this.message = 'Invalid username or password';
      }
    );
  }
}
