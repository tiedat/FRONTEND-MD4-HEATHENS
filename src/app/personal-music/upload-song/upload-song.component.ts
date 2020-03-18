import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-upload-song',
  templateUrl: './upload-song.component.html',
  styleUrls: ['./upload-song.component.scss']
})
export class UploadSongComponent implements OnInit {
  songUploadForm: FormGroup;
  message: string;
  isShow = false;
  isSuccess = true;

  constructor(private userService: UserService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.songUploadForm = this.fb.group({
      name: '',
      descriptionSong: '',
      fileMp3: '',
      image: '',
    });
  }

  uploadSong(): void {
    const {value} = this.songUploadForm;
    this.isShow = true;
    this.userService.createSong(value).subscribe(
      next => {
        this.message = 'Thêm thành công !';
      }, error => {
        this.isSuccess = false;
        this.message = 'Thêm thất bại !';
      }
    );
    this.songUploadForm.reset();
  }

  uploadFileMP3(event): void {
  }

  uploadFileImg(event): void {
  }

}
