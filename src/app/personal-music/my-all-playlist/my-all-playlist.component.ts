import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-all-playlist',
  templateUrl: './my-all-playlist.component.html',
  styleUrls: ['./my-all-playlist.component.scss']
})
export class MyAllPlaylistComponent implements OnInit {
  listPlayList: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
