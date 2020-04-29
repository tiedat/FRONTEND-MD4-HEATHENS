import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { PlayerService } from 'src/app/services/player.service';
import { ISong } from 'src/app/interface/song';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-most-listen-song',
  templateUrl: './most-listen-song.component.html',
  styleUrls: ['./most-listen-song.component.scss']
})
export class MostListenSongComponent implements OnInit {

  songs: ISong[];
  username: string;
  isPlay: Observable<boolean>;

  constructor(
    private songService: SongService,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.songService.getMostListening().subscribe(songs => this.songs = songs.data);
    this.username = localStorage.getItem('username');
    this.isPlay = this.playerService.isPlay$;
  }

  playMusic() {
    this.playerService.addPlayList(this.songs);
    this.playerService.changePlayStatus(true);
  }

}
