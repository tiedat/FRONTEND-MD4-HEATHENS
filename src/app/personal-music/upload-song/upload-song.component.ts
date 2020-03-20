import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import * as firebase from 'firebase';
import {finalize} from 'rxjs/operators';
import {ISong} from '../../interface/song';
import {AngularFireStorage} from '@angular/fire/storage';
@Component({
  selector: 'app-upload-song',
  templateUrl: './upload-song.component.html',
  styleUrls: ['./upload-song.component.scss']
})
export class UploadSongComponent implements OnInit {
  imageUrl = null;
  songUploadForm: FormGroup;
  message: string;
  isShow = false;
  isSuccess = true;
  selectedAudio = null;
  selectedImage = null;
  audio = null;
  checkImageNull = false;
  checkMp3Null = false;
  song: ISong;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.songUploadForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      descriptionSong: ['', [Validators.required, Validators.minLength(3)]],
      fileMp3: '',
      image: '',
    });
  }

  // uploadSong(): void {
  //   const {value} = this.songUploadForm;
  //   this.isShow = true;
  //   this.userService.createSong(value).subscribe(
  //     next => {
  //       this.message = 'Thêm thành công !';
  //     }, error => {
  //       this.isSuccess = false;
  //       this.message = 'Thêm thất bại !';
  //     }
  //   );
  //   this.songUploadForm.reset();
  // }
  NgSubmit() {
    this.song.name = this.songUploadForm.get('name').value;
    this.song.descriptionSong = this.songUploadForm.get('descriptionSong').value;
    this.userService.createSong(this.song);
    this.uploadFileMP3();
    this.uploadFileImage();
    console.log(this.song);
  }
  uploadFileMP3() {
    const filePathMp3 = `audio/${this.selectedAudio.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRefMp3 = this.storage.ref(filePathMp3);
    this.storage.upload(filePathMp3, this.selectedAudio).snapshotChanges().pipe(
      finalize(() => {
        fileRefMp3.getDownloadURL().subscribe(url => {
          this.audio = url;
          this.song.fileMp3 = url;
        });
      })
    ).subscribe();
  }
  uploadFileImage() {
    const filePathImage = `image/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRefImage = this.storage.ref(filePathImage);
    this.storage.upload(filePathImage, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRefImage.getDownloadURL() .subscribe( url => {
          this.imageUrl = url;
          this.song.image = url;
        });
      })
    ).subscribe();
  }
  showPreviewMp3(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.audio = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedAudio = event.target.files[0];
      this.checkMp3Null = true;
    } else {
      this.audio = '../../assets/img/Placeholder.jpg';
      this.selectedAudio = null;
    }
  }
  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imageUrl = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.checkImageNull = true;
    } else {
      this.imageUrl = '../../../assets/img/Placeholder.jpg';
      this.selectedImage = null;
    }
  }
}
