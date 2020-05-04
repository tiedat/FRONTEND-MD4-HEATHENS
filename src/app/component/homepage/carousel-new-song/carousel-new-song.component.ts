import { PlayerService } from 'src/app/services/player.service';
import { ISong } from './../../../interface/song';
import { SongService } from './../../../services/song.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-new-song',
  templateUrl: './carousel-new-song.component.html',
  styleUrls: ['./carousel-new-song.component.scss']
})
export class CarouselNewSongComponent implements OnInit {

  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 5,
    "autoplay": false,
    "dots": false,
    "arrows": false,
    "autoplaySpeed": 5000,
  };
  carousel_title = 'Nhạc mới phát hành';
  songs: ISong[];

  constructor(
    private songService: SongService,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.songService.getNewestSong().subscribe(songs => this.songs = songs.data);
  }


  playMusic(song: ISong) {
    this.playerService.addSong(song);
    this.playerService.changePlayStatus(true);
  }
}
