import { PlayerService } from './../../services/player.service';
import { ISong } from './../../interface/song';
import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.scss']
})
export class NewSongComponent implements OnInit {

  songs: ISong[];
  username: string;
  isPlay: Observable<boolean>;

  constructor(
    private songService: SongService,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.songService.getNewestSong().subscribe(songs => this.songs = songs.data);
    this.username = localStorage.getItem('username');
    this.isPlay = this.playerService.isPlay$;
  }

  playMusic() {
    this.playerService.addPlayList(this.songs);
    this.playerService.changePlayStatus(true);
  }

}
