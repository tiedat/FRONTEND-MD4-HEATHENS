import { Component, OnInit } from '@angular/core';
import {IPlaylist} from '../../interface/playlist';
import {DataService} from '../../services/data.service';
import {PlaylistService} from '../../services/playlist.service';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-my-all-playlist',
  templateUrl: './my-all-playlist.component.html',
  styleUrls: ['./my-all-playlist.component.scss']
})
export class MyAllPlaylistComponent implements OnInit {
  imgDetail: any;
  message: string;
  isShow = false;
  isSuccess = true;
  isLoading = false;
  listPlayList: any[];
  playlistForm: any;
  playlist: IPlaylist = {
    name: '',
    descriptionPlaylist: '',
    songs: [],
    user: {},
  };
  username: any;
  constructor(private data: DataService,
              private playlistService: PlaylistService,
              private fb: FormBuilder,
              private userService: UserService) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(username => this.username = username);
    this.userService.getUserByUsername(this.username).subscribe(user => {
      console.log(user);
      this.playlist.user = user.data;
    });
    this.playlistService.getAllPlaylistByUser(this.username).subscribe(list => {
      console.log(list);
      this.listPlayList = list.data;
    });
    this.playlistForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      descriptionPlaylist: '',
    });
    this.data.currentMessage.subscribe(username => {
      console.log(username);
      this.username = username;
    });
  }
  showPlayList() {
  }
  creatPlaylist() {
    this.playlist.name = this.playlistForm.get('name').value;
    console.log(this.playlist);
    this.playlistService.createPlaylist(this.playlist).subscribe( result => {
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