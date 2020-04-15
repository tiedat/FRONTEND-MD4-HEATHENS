import { SongService } from './../../services/song.service';
import { UserService } from './../../services/user.service';
import { ISong } from './../../interface/song';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniplayer',
  templateUrl: './miniplayer.component.html',
  styleUrls: ['./miniplayer.component.scss']
})
export class MiniplayerComponent implements OnInit {
  @Input() songList: any[];
  @Input() songPlayed: any;
  constructor(private songService: SongService) { }

  ngOnInit(): void {
  }

  updateListener(song: ISong) {
    song.numberOfPlays += 1;
    this.songService.updateSong(song).subscribe();
  }

}
