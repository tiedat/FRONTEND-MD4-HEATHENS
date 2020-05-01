import {PlayerService} from 'src/app/services/player.service';
import {Observable} from 'rxjs';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SongService} from '../../services/song.service';
import {ISong} from 'src/app/interface/song';

@Component({
  selector: 'app-miniplayer',
  templateUrl: './miniplayer.component.html',
  styleUrls: ['./miniplayer.component.scss']
})
export class MiniplayerComponent implements OnInit {
  player: Observable<ISong[]>;
  currentSong: ISong;
  songList: ISong[];
  songIndex = 0;
  length;
  isRepeatOne = false;
  isRepeat = false;
  isShuffle = false;
  originSongs: ISong[];
  constructor(private songService: SongService,
              private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.player = this.playerService.player$;
    this.player.subscribe(songs => {
      this.songList = songs;
      this.currentSong = this.songList[0];
      this.length = this.songList.length;
    });
  }

  shuffleList() {
    this.isShuffle = !this.isShuffle;
    if (this.isShuffle) {
      this.originSongs = this.songList;
      this.songList = this.shuffle(this.songList);
    } else {
      this.player = this.playerService.player$;
      this.player.subscribe(song => {
        this.songList = this.originSongs;
      });
    }
  }

  upNumberOfPlays() {
    this.currentSong.numberOfPlays = this.currentSong.numberOfPlays + 1;
    this.songService.updateSong(this.currentSong).subscribe();
  }

  nextSong() {
    this.upNumberOfPlays();
    this.playerService.historySong(this.currentSong);
    if (this.isRepeatOne) {
      console.log(this.songIndex);
      this.currentSong = this.songList[this.songIndex];
    } else
      if (this.songIndex < this.length - 1) {
      this.songIndex++;
      this.currentSong = this.songList[this.songIndex];
    } else {
      if (this.isRepeat) {
        this.songIndex = 0;
        this.currentSong = this.songList[0];
      }
    }
  }

  toggleShuffer() {
    this.isShuffle = !this.isShuffle;
  }

  backSong() {
    if (this.songIndex > 0) {
      this.songIndex--;
      this.currentSong = this.songIndex[this.songIndex];
    }
  }

  forwardSong() {
    if (this.songIndex < this.length - 1) {
      this.songIndex++;
      this.currentSong = this.songIndex[this.songIndex];
    }
  }

  shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
}
