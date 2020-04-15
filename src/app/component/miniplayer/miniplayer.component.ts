import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SongService} from '../../services/song.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-miniplayer',
  templateUrl: './miniplayer.component.html',
  styleUrls: ['./miniplayer.component.scss']
})
export class MiniplayerComponent implements OnInit {
  @Input() songList: any[];
  @Input() songPlayed: any;
  @Output() changeSongs: EventEmitter<any> = new EventEmitter();
  idNextSong: any;
  constructor(private songService: SongService,
              private userService: UserService,) { }

  ngOnInit(): void {
    console.log(this.songList);
  }
  upNumberOfPlays() {
    console.log(this.songPlayed.numberOfPlays);
    this.songPlayed.numberOfPlays = this.songPlayed.numberOfPlays + 1;
    this.songService.updateSong(this.songPlayed);
    console.log(this.songPlayed);
  }
  nextSong() {
    this.changeSongs.emit();
  }
}
