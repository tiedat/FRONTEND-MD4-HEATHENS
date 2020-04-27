import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';
import {UserService} from '../../services/user.service';
import {ISong} from '../../interface/song';
import {IUser} from '../../interface/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IGender} from '../../interface/gender';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
userCreateForm: FormGroup;
  message: string;
  isShow = false;
  isSuccess = true;
  isLoading = false;
  user: IUser = {
    fullName: '',
    gender: IGender.MALE,
    username: '',
    password: '',
  };
  constructor(private userService: UserService,
              private fb: FormBuilder) { }
  ngOnInit() {
    this.userCreateForm = this.fb.group({
      fullName: this.fb.control('', [Validators.required]),
      gender: IGender,
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }
  NgSubmit() {
    this.isLoading = true;
    this.user.fullName = this.userCreateForm.get('fullName').value;
    this.user.username = this.userCreateForm.get('username').value;
    this.user.password = this.userCreateForm.get('password').value;
    this.user.gender = this.userCreateForm.get('gender').value;
    this.userService.createUser(this.user).subscribe( () => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Tạo thành công!';
      this.isLoading = false;
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Tạo thất bại!';
      this.isLoading = false;
    });
  }
}
