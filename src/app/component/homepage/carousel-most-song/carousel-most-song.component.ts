import { SongService } from './../../../services/song.service';
import { PlayerService } from './../../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { ISong } from 'src/app/interface/song';

@Component({
  selector: 'app-carousel-most-song',
  templateUrl: './carousel-most-song.component.html',
  styleUrls: ['./carousel-most-song.component.scss']
})
export class CarouselMostSongComponent implements OnInit {

  songs: ISong[] = [];
  carousel_title = 'Bài hát được nghe nhiều nhất';
  blankSong: ISong = {};

  constructor(
    private songService: SongService
  ) { }

  ngOnInit(): void {
    this.songService.getMostListening().subscribe(songs => { this.songs = [...songs.data, this.blankSong] },
      error => {
        console.log(error);
      });
    console.log(this.songs);
  }

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "autoplay": false,
    "dots": false,
    "arrows": false,
    "autoplaySpeed": 5000,
  };
}
