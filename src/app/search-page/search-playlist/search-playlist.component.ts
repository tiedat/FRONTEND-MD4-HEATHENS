import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-playlist',
  templateUrl: './search-playlist.component.html',
  styleUrls: ['./search-playlist.component.scss']
})
export class SearchPlaylistComponent implements OnInit {
  @Input() playlistList: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
