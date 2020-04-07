import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SongService} from '../services/song.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  isShowSong = false;
  isShowAll = true;
  songList: any[];
  searchValue;
  constructor(private route: ActivatedRoute,
              private songService: SongService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.searchValue = params.get('textSearch');
      console.log(this.searchValue);
      this.songService.getSongByName(this.searchValue).subscribe(list => {
        this.songList = list.data;
        console.log(this.songList);
      });
    });
  }
  showSongs() {
    this.isShowAll = false;
    this.isShowSong = true;
  }
  showAll() {
    this.isShowSong = false;
    this.isShowAll = true;
  }
}
