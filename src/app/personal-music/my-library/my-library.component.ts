import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.scss']
})
export class MyLibraryComponent implements OnInit {
  songList: any[];
  username: string;
  constructor(private songService: SongService,
              private route: ActivatedRoute,
              private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(username => {
      console.log(username);
      this.username = username;
    });
    console.log(this.username);
    this.songService.getAllSongByUser(this.username).subscribe(list => {
      this.songList = list.data;
    });
    // this.route.paramMap.subscribe(param => {
    //   console.log(param);
    // });
  }
}
