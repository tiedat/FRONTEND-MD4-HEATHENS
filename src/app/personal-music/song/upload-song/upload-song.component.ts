import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SongService} from '../../../services/song.service';
import * as firebase from 'firebase';
import {finalize} from 'rxjs/operators';
import {ISong} from '../../../interface/song';
import {AngularFireStorage} from '@angular/fire/storage';
import {IUser} from '../../../interface/user';
import {DataService} from '../../../services/data.service';
import {UserService} from '../../../services/user.service';
@Component({
  selector: 'app-upload-song',
  templateUrl: './upload-song.component.html',
  styleUrls: ['./upload-song.component.scss']
})
export class UploadSongComponent implements OnInit {
  checkUpload = false;
  percentLoadingMp3;
  percentLoadingImg;
  showLoadingMp3 = false;
  showLoadingImg = false;
  imageUrl = null;
  songUploadForm: FormGroup;
  message: string;
  isShow = false;
  isSuccess = true;
  isLoading = false;
  selectedAudio = null;
  selectedImage = null;
  audio = null;
  checkImageNull = false;
  checkMp3Null = false;
  username;
  song: ISong = {
    name: '',
    descriptionSong: '',
    fileMp3: '',
    image: '',
    numberOfPlays : 0,
    user: {}
  };

  constructor(private songService: SongService,
              private fb: FormBuilder,
              private storage: AngularFireStorage,
              // private data: DataService,
              private userService: UserService) {
  }

  ngOnInit() {
    // this.data.currentMessage.subscribe(username => this.username = username);
    this.username = localStorage.getItem('username');
    console.log(this.username);
    this.userService.getUserByUsername(this.username).subscribe(user => {
      console.log(user);
      this.song.user = user.data;
    });
    // this.userService.getUserByUsername(this.username).subscribe(user => {
    //   console.log(user);
    //   this.song.user = user.data;
    // });
    this.songUploadForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      descriptionSong: '',
      fileMp3: '',
      image: '',
      numberOfPlays : 0,
    });
  }

  NgSubmit() {
    this.isLoading = true;
    this.song.name = this.songUploadForm.get('name').value;
    this.song.descriptionSong = this.songUploadForm.get('descriptionSong').value;
    this.uploadFileMP3();
    this.uploadFileImage();
    console.log(this.song);
    this.songService.createSong(this.song).subscribe( result => {
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
  uploadFileMP3() {
    const filePathMp3 = `audio/${this.selectedAudio.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRefMp3 = this.storage.ref(filePathMp3);
    this.storage.upload(filePathMp3, this.selectedAudio).snapshotChanges().pipe(
      finalize(() => {
        fileRefMp3.getDownloadURL().subscribe(url => {
          this.audio = url;
          this.song.fileMp3 = url;
          this.percentLoadingMp3 = 'width: 100%';
          this.checkUpload = true;
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
          this.percentLoadingImg = 'width: 100%';
        });
      })
    ).subscribe();
  }
  showPreviewMp3(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.percentLoadingMp3 = 'width: 25%';
      reader.onload = (e: any) => this.audio = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedAudio = event.target.files[0];
      this.checkMp3Null = true;
      this.showLoadingMp3 = true;
      this.uploadFileMP3();
    } else {
      this.audio = '../../assets/img/Placeholder.jpg';
      this.selectedAudio = null;
    }
  }
  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.percentLoadingImg = 'width: 25%';
      reader.onload = (e: any) => this.imageUrl = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.checkImageNull = true;
      this.showLoadingImg = true;
      this.uploadFileImage();
    } else {
      this.imageUrl = '../../../assets/img/Placeholder.jpg';
      this.selectedImage = null;
    }
  }
}
