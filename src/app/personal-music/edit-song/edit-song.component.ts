import { Component, OnInit } from '@angular/core';
import {ISong} from '../../interface/song';
import {SongService} from '../../services/song.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {ActivatedRoute} from '@angular/router';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {
  percentLoadingMp3;
  percentLoadingImg;
  showLoadingMp3 = false;
  showLoadingImg = false;
  songUploadForm: FormGroup;
  message: string;
  isShow = false;
  isSuccess = true;
  isLoading = false;
  selectedAudio = null;
  selectedImage = null;
  audio = null;
  imageUrl = null;
  audioOld = null;
  imageUrlOld = null;
  checkImageNull = false;
  checkMp3Null = false;
  song: ISong = {
    name: '',
    descriptionSong: '',
    fileMp3: '',
    image: '',
    numberOfPlays : 0,
  };
  id;
  songEditForm: FormGroup;
  constructor(private userService: SongService,
              private fb: FormBuilder,
              private storage: AngularFireStorage,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.songEditForm = this.fb.group({
      name: '',
      descriptionSong: '',
      fileMp3: '',
      image: '',
      numberOfPlays : 0,
    });
    this.route.paramMap.subscribe(params =>{
        console.log(params);
        const idSearch = Number(params.get('id'));
        console.log(idSearch);
        this.userService.getSong(idSearch).subscribe(song => {
          this.song = song.data;
          console.log(song);
          console.log(this.song.name);
          this.songEditForm.controls.name.setValue(this.song.name);
          this.songEditForm.controls.descriptionSong.setValue(this.song.descriptionSong);
          this.audioOld = this.song.fileMp3;
          this.imageUrlOld = this.song.image;
        });
    });
  }
  NgSubmit() {
    this.isLoading = true;
    this.song.name = this.songEditForm.get('name').value;
    this.song.descriptionSong = this.songEditForm.get('descriptionSong').value;
    if (this.audio != null) {
      this.uploadFileMP3();
    }
    if (this.imageUrl != null) {
      this.uploadFileImage();
    }
    console.log(this.song);
    this.userService.updateSong(this.song).subscribe( result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Sửa thành công!';
      this.isLoading = false;
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Sửa thất bại!';
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
