import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { SongService } from '../../../services/song.service';
import * as firebase from 'firebase';
import { finalize } from 'rxjs/operators';
import { ISong } from '../../../interface/song';
import { AngularFireStorage } from '@angular/fire/storage';
import { IUser } from '../../../interface/user';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-upload-song',
  templateUrl: './upload-song.component.html',
  styleUrls: ['./upload-song.component.scss']
})
export class UploadSongComponent implements OnInit {
  checkUpload = false;
  percentLoadingMp3 = '';
  percentLoadingImg = '';
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
  username = '';
  song: ISong = {
    name: '',
    description: '',
    fileMp3: '',
    image: '',
    numberOfPlays: 0,
    tags: [{}],
    user: {}
  };

  constructor(private songService: SongService,
              private fb: FormBuilder,
              private storage: AngularFireStorage,
              private userService: UserService) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.userService.getUserByUsername(this.username).subscribe(user => {
      this.song.user = user.data;
    });
    this.songUploadForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      description: '',
      fileMp3: '',
      image: '',
      numberOfPlays: 0,
      tags: this.fb.array([])
    });
    this.addTag();
  }

  NgSubmit() {
    this.isLoading = true;
    this.song.name = this.songUploadForm.get('name').value;
    this.song.description = this.songUploadForm.get('description').value;
    this.uploadFileMP3();
    this.uploadFileImage();
    this.song.tags = this.songUploadForm.get('tags').value;
    this.songService.createSong(this.song).subscribe(result => {
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
        fileRefImage.getDownloadURL().subscribe(url => {
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

  get tags(): FormArray {
    return this.songUploadForm.get('tags') as FormArray;
  }

  addTag() {
    const tag = new FormGroup({
      nameTag: new FormControl('')
    });
    this.tags.push(tag);
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }
}
