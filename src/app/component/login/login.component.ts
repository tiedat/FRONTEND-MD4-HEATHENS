import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {IUser} from '../../interface/user';
import {DataService} from '../../services/data.service';

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
  user: IUser = {
    username: '',
    password: '',
  };
  userId: number;
  check = false;
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;

  constructor(private userService: UserService,
              private route: Router,
              private data: DataService) {
  }

  ngOnInit(): void {
    // this.userService.getUserByUsername().subscribe(result => {
    //   this.user = result;
    //   console.log(result);
    // });
  }
  createMessage(username) {
    this.data.changeMessage(username);
  }

  checkUser() {
    const userName = this.formGroup.get('userName').value;
    const password = this.formGroup.get('password').value;
    this.userService.getUserByUsername(userName).subscribe(result => {
      this.user = result.data;
      console.log(this.user);
      console.log(result);
      if (this.user === null) {
        this.isShow = true;
        this.message = 'Sai tài khoản';
      } else if (this.user.password === password) {
        this.createMessage(this.user.username);
        this.route.navigate(['/mymusic/songs']).then((e) => {
          this.isShow = true;
          console.log('Navigation is successful!');
        });
      } else {
        this.isShow = true;
        this.message = 'Sai mật khẩu.';
      }
      }, error => {
      this.isShow = true;
      this.message = 'Sai tài khoản';
      });
    // for (let i = 0; i < this.listUser.length; i++) {
    //   if (this.listUser[i].userName === userName && this.listUser[i].password === password) {
    //     this.check = true;
    //     this.userId = this.listUser[i].idChuNha;
    //     this.route.navigate(['/mysongs/', this.listUser[i].userName]).then((e) => {
    //       if (e) {
    //         console.log('Navigation is successful!');
    //       } else {
    //         console.log('Navigation has failed!');
    //       }
    //     });
    //   }
    //   // else {
    //   //   this.isShow = true;
    //   //   this.isSuccess = false;
    //   //   this.message = 'Sai tài khoản hoặc mật khẩu.';
    //   //   this.isLoading = false;
    //   //   this.formGroup.reset();
    //   // }
    // }
  }
}
