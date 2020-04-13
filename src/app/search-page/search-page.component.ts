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
  isShowSinger = false;
  isShowPlaylist = false;
  songList: any[];
  singerList: any[];
  PlaylistList: any[];
  searchValue;
  constructor(private route: ActivatedRoute,
              private songService: SongService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.searchValue = params.get('search');
      console.log(this.searchValue);
      this.songService.getSongByName(this.searchValue).subscribe(list => {
        this.songList = list.data;
        console.log(this.songList);
      });
    });
  }
  showSongs() {
    this.isShowPlaylist = false;
    this.isShowSinger = false;
    this.isShowAll = false;
    this.isShowSong = true;
  }
  showAll() {
    this.isShowPlaylist = false;
    this.isShowSinger = false;
    this.isShowSong = false;
    this.isShowAll = true;
  }
  showSinger() {
    this.isShowSong = false;
    this.isShowAll = false;
    this.isShowPlaylist = false;
    this.isShowSinger = true;
  }
  showPlaylist() {
    this.isShowSong = false;
    this.isShowAll = false;
    this.isShowSinger = false;
    this.isShowPlaylist = true;
  }
}
