import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { PlayerService } from 'src/app/services/player.service';
import { Observable } from 'rxjs';
import { ISong } from 'src/app/interface/song';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  songList: any[];
  username: string;
  isPlay: Observable<boolean>;
  songPlayed: any;
  constructor(private songService: SongService,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.songService.getAllSong().subscribe(result => {
      this.songList = result.data;
    });
    this.isPlay = this.playerService.isPlay$;
  }
  playMusic(song: ISong) {
    this.songPlayed = song;
    this.playerService.addSong(song);
    this.playerService.changePlayStatus(true);
  }
  nextSong() {
    this.songPlayed = this.songList[Math.floor(Math.random() * this.songList.length)];
    console.log(this.songPlayed);
    this.playMusic(this.songPlayed);
  }
}
