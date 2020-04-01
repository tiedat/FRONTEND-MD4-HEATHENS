import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  songList: any[];
  constructor(private userService: SongService) { }

  ngOnInit() {
    this.userService.getAllSong().subscribe( result => {
      this.userService = result.data;
    });
  }

}
