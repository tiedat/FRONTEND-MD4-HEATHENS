import { Component, OnInit } from '@angular/core';
import { IPlaylist } from '../../../interface/playlist';
import { PlaylistService } from '../../../services/playlist.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-my-all-playlist',
  templateUrl: './my-all-playlist.component.html',
  styleUrls: ['./my-all-playlist.component.scss']
})
export class MyAllPlaylistComponent implements OnInit {
  message: string;
  isShow = false;
  isSuccess = true;
  isLoading = false;
  listPlayList: any[];
  playlistForm: any;
  playlist: IPlaylist = {
    name: '',
    image: '',
    description: '',
    songs: [],
    user: {},
  };
  username: any;

  constructor(private playlistService: PlaylistService,
              private fb: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.userService.getUserByUsername(this.username).subscribe(user => {
      this.playlist.user = user.data;
    });
    this.playlistService.getAllPlaylistByUser(this.username).subscribe(list => {
      this.listPlayList = list.data;
      console.log(this.listPlayList);
    });
    this.playlistForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
    });
  }

  creatPlaylist() {
    this.playlist.name = this.playlistForm.get('name').value;
    this.playlist.image = 'https://photo-zmp3.zadn.vn/album_default.png';
    this.playlistService.createPlaylist(this.playlist).subscribe(result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Tạo thành công!';
      this.isLoading = false;
      this.ngOnInit();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Tạo thất bại!';
      this.isLoading = false;
    });
  }
}
