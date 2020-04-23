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
  shufferList: ISong[];
  songIndex = 0;
  length;
  isRepeat = false;
  isShuffer = false;
  constructor(private songService: SongService,
    private playerService: PlayerService) { }

  ngOnInit(): void {
    this.songList = this.playerService.player$;

    this.songList.subscribe(song => {
      console.log(song);
      this.currentSong = song[this.songIndex];
      this.length = song.length;
      //this.shufferList = this.shuffle(song);

    });
    console.log(this.shufferList);
  }
  upNumberOfPlays() {
    this.currentSong.numberOfPlays = this.currentSong.numberOfPlays + 1;
    this.songService.updateSong(this.currentSong).subscribe();
  }
  nextSong() {
    console.log(this.isShuffer)
    this.upNumberOfPlays();
    console.log(this.songIndex);
    console.log(this.length);

    if (this.songIndex < this.length - 1) {
      this.songIndex++;
      console.log(this.songIndex);
      this.songList.subscribe(song => this.currentSong = song[this.songIndex]);
      //this.currentSong = this.shufferList[this.songIndex];
    } else {
      this.songIndex = 0;
      this.songList.subscribe(song => this.currentSong = song[this.songIndex]);
    }

  }

  toggleShuffer() {
    this.isShuffer = !this.isShuffer;
    console.log(this.isShuffer);
  }

  backSong() {
    if (this.songIndex > 0) {
      this.songIndex--;
      this.songList.subscribe(song => this.currentSong = song[this.songIndex]);
    }
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
