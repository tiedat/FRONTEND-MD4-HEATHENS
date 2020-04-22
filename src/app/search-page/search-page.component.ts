import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SongService} from '../services/song.service';
import {PlaylistService} from '../services/playlist.service';

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
  playlistList: any[];
  searchValue;
  constructor(private route: ActivatedRoute,
              private songService: SongService,
              private playlistService: PlaylistService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.searchValue = params.get('search');
      console.log(this.searchValue);
      this.songService.getSongByName(this.searchValue).subscribe(list => {
        this.songList = list.data;
        console.log(this.songList);
      });
      this.playlistService.getPlaylistByName(this.searchValue).subscribe(list => {
        this.playlistList = list.data;
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
