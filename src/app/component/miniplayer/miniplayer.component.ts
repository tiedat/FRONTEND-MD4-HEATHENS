import { PlayerService } from 'src/app/services/player.service';
import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SongService } from '../../services/song.service';
import { UserService } from '../../services/user.service';
import { ISong } from 'src/app/interface/song';

@Component({
  selector: 'app-miniplayer',
  templateUrl: './miniplayer.component.html',
  styleUrls: ['./miniplayer.component.scss']
})
export class MiniplayerComponent implements OnInit {
  songList: Observable<ISong[]>;
  currentSong: ISong;
  shufflerList: ISong[];
  songIndex = 0;
  length;
  isRepeat = false;
  isShuffle = false;
  constructor(private songService: SongService,
              private playerService: PlayerService) { }

  ngOnInit(): void {
    this.songList = this.playerService.player$;
    this.songList.subscribe(song => {
      console.log(song);
      this.currentSong = song[this.songIndex];
      // if (this.isShuffle) {
      //   this.shufflerList = this.shuffle(song);
      //   console.log(this.isShuffle);
      // }
      this.length = song.length;
    });
    console.log(this.shufflerList);
  }
  shuffleList() {
    this.isShuffle = !this.isShuffle;
    if (this.isShuffle) {
      this.songList.subscribe(song => {
      console.log(song);
      this.currentSong = song[this.songIndex];
      this.shufflerList = this.shuffle(song);
      console.log(this.isShuffle);
      this.length = song.length;
    }); } else {this.ngOnInit();
      // if (this.isShuffle) {
      //   this.shufflerList = this.shuffle(song);
      //   console.log(this.isShuffle);
      // }
      // this.length = song.length;
    }
    console.log(this.isShuffle);
    console.log(this.shufflerList);
  }
  upNumberOfPlays() {
    this.currentSong.numberOfPlays = this.currentSong.numberOfPlays + 1;
    this.songService.updateSong(this.currentSong).subscribe();
  }
  nextSong() {
    this.upNumberOfPlays();
    console.log(this.songIndex);
    console.log(this.length);

    if (this.songIndex < this.length - 1) {
      this.songIndex++;
      console.log(this.songIndex);
      this.songList.subscribe(song => this.currentSong = song[this.songIndex]);
      // this.currentSong = this.shufflerList[this.songIndex];
    } else {
      if (this.isRepeat) {
        this.songIndex = 0;
        this.songList.subscribe(song => this.currentSong = song[this.songIndex]);
      }
    }

  }

  backSong() {
    if (this.songIndex > 0) {
      this.songIndex--;
      this.songList.subscribe(song => this.currentSong = song[this.songIndex]);
    }
  }
  forwardSong() {
    if (this.songIndex < this.length - 1) {
      this.songIndex++;
      this.songList.subscribe(song => this.currentSong = song[this.songIndex]);}
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
}
