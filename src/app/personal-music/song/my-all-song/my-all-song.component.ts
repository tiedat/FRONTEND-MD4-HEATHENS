import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SongService } from '../../../services/song.service';
import { ActivatedRoute } from '@angular/router';
import { ISong } from '../../../interface/song';
import { UserService } from '../../../services/user.service';
import {PlayerService} from '../../../services/player.service';

@Component({
  selector: 'app-my-all-song',
  templateUrl: './my-all-song.component.html',
  styleUrls: ['./my-all-song.component.scss']
})
export class MyAllSongComponent implements OnInit {
  songList: any[];
  username: string;
  user: any;
  constructor(
    private songService: SongService,
    private userService: UserService,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.userService.getUserByUsername(this.username).subscribe(user => {
      this.user = user.data;
    });
    this.songService.getAllSongByUser(this.username).subscribe(list => {
      this.songList = list.data;
    });
  }
  deleteSong(i: string | number) {
    const song = this.songList[i];
    this.songService.deleteSong(song.id).subscribe(() => {
      this.songList = this.songList.filter(t => t.id !== song.id);
      console.log('Xóa ' + song.id);
    });
  }
  playMusic(song: ISong) {
    this.playerService.addSong(song);
    this.playerService.changePlayStatus(true);
  }
}
