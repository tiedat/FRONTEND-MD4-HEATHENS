import { AuthenticationService } from 'src/app/services/authentiation.service';
import { IPlaylist } from './../../interface/playlist';
import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { PlayerService } from 'src/app/services/player.service';
import { Observable } from 'rxjs';
import { ISong } from 'src/app/interface/song';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  isPlay: Observable<boolean>;
  playlists: IPlaylist[];
  isLoggedIn = false;
  constructor(
    private playerService: PlayerService,
    private authenticationService: AuthenticationService

  ) { }

  ngOnInit() {
    this.isPlay = this.playerService.isPlay$;
    this.playlists = JSON.parse(localStorage.getItem('listenedPlaylist'));
    this.checkLogin();
  }

  checkLogin() {
    if (this.authenticationService.isUserLoggedIn()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
