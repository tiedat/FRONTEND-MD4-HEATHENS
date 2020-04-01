import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';

@Component({
  selector: 'app-my-all-song',
  templateUrl: './my-all-song.component.html',
  styleUrls: ['./my-all-song.component.scss']
})
export class MyAllSongComponent implements OnInit {
  songList: any[];
  constructor(private userService: SongService) { }

  ngOnInit() {
    this.userService.getAllSong().subscribe( result => {
      this.songList = result.data;
    });
  }
  deleteSong(i) {
    const song = this.songList[i];
    this.userService.deleteSong(song.id).subscribe(() => {
      this.songList = this.songList.filter(t => t.id !== song.id);
      console.log('Xóa ' + song.id);
    });
  }


}
