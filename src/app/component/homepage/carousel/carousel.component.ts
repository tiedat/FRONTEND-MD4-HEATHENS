import { IPlaylist } from './../../../interface/playlist';
import { PlayerService } from 'src/app/services/player.service';
import { Component, OnInit, Input } from '@angular/core';
import { ISong } from 'src/app/interface/song';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() carousel_title: string;

  @Input() obj: any[] = [];

  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 5,
    "autoplay": false,
    "dots": false,
    "arrows": false,
    "autoplaySpeed": 5000,
  };

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    console.log(this.obj);
  }

  playPlaylist(playlist: IPlaylist) {
    if (playlist.songs.length > 0) {
      this.playerService.addPlayList(playlist.songs);
      this.playerService.changePlayStatus(true);
    }
  }

}
