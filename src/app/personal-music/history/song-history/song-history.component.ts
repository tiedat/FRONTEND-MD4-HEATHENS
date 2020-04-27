import { ISong } from 'src/app/interface/song';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-history',
  templateUrl: './song-history.component.html',
  styleUrls: ['./song-history.component.scss']
})
export class SongHistoryComponent implements OnInit {

  songs: ISong[];

  constructor() { }

  ngOnInit(): void {
    this.songs = JSON.parse(localStorage.getItem('listenedSong'));
  }

}
