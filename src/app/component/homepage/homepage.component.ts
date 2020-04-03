import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';
import {UserService} from '../../services/user.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  songList: any[];
  username: string;
  constructor(private songService: SongService,
              private userService: UserService,
              private data: DataService ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(username => this.username = username);
    this.userService.getUserByUsername(this.username).subscribe(user => {
      console.log(user);
    });
    this.songService.getAllSong().subscribe( result => {
      this.songList = result.data;
      console.log(this.songList);
    });
  }

}
