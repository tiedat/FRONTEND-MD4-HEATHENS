import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../../services/player.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.scss']
})
export class MyLibraryComponent implements OnInit {
  songList: any[];
  playlistList: any[];
  username: string;
  user: any;
  constructor(private songService: SongService,
              private userService: UserService,
              private route: ActivatedRoute,
              private playerService: PlayerService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.userService.getUserByUsername(this.username).subscribe(user => {
      this.user = user.data;
    });
    this.songService.getAllSongByUser(this.username).subscribe(list => {
      this.songList = list.data;
    });  }
}
