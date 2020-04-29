import { IPlaylist } from './../../../interface/playlist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-history',
  templateUrl: './playlist-history.component.html',
  styleUrls: ['./playlist-history.component.scss']
})
export class PlaylistHistoryComponent implements OnInit {

  playlists: IPlaylist[];

  constructor() { }

  ngOnInit(): void {
    this.playlists = JSON.parse(localStorage.getItem('listenedPlaylist'));
  }

}
