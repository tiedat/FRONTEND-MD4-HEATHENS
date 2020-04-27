import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentiation.service';

function focus() {
  document.getElementById('inputEmail').focus();
}

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

  ngOnInit(): void { focus(); }

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
