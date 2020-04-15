import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SongService} from '../../services/song.service';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';
import {ISong} from '../../interface/song';
import {UserService} from '../../services/user.service';

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
              private route: ActivatedRoute,
              private data: DataService,
              private userService: UserService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(username => {
      console.log(username);
      this.username = username;
    });
    console.log(this.username);
    this.songService.getAllSongByUser(this.username).subscribe(list => {
      this.songList = list.data;
    });
    // this.route.paramMap.subscribe(param => {
    //   console.log(param);
    // });
    this.userService.getUserByUsername(this.username).subscribe(user => {
      console.log(user);
      this.user = user.data;
    });
  }
  deleteSong(i) {
    const song = this.songList[i];
    this.songService.deleteSong(song.id).subscribe(() => {
      this.songList = this.songList.filter(t => t.id !== song.id);
      console.log('Xóa ' + song.id);
    });
  }
  updateListener(song: ISong) {
    song.numberOfPlays = song.numberOfPlays + 1;
    song.user = this.user;
    this.songService.updateSong(song).subscribe();
    console.log(song.user);
    console.log(song);
  }
  autoPlay() {
  }
}
