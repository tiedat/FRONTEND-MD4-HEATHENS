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
  songIndex = 0
  constructor(private songService: SongService,
    private playerService: PlayerService) { }

  ngOnInit(): void {
    this.songList = this.playerService.player$;
    this.songList.subscribe(song => this.currentSong = song[this.songIndex]);
  }
  upNumberOfPlays() {
    this.currentSong.numberOfPlays = this.currentSong.numberOfPlays + 1;
    this.songService.updateSong(this.currentSong).subscribe();
  }
  nextSong() {
    this.upNumberOfPlays();
    this.songIndex++;
    this.songList.subscribe(song => this.currentSong = song[this.songIndex]);

  }
}
