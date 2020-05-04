import { Routes, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentiation.service';
import { SongCommentComponent } from './../song-comment/song-comment.component';
import { PlayerService } from 'src/app/services/player.service';
import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SongService } from '../../services/song.service';
import { ISong } from 'src/app/interface/song';
import { UserService } from '../../services/user.service';
import { PlaylistService } from '../../services/playlist.service';
import { IPlaylist } from '../../interface/playlist';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { isBuffer } from 'util';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-miniplayer',
  templateUrl: './miniplayer.component.html',
  styleUrls: ['./miniplayer.component.scss']
})
export class MiniplayerComponent implements OnInit {
  player: Observable<ISong[]>;
  currentSong: ISong;
  songList: ISong[];
  songIndex = 0;
  length;
  isRepeatOne = false;
  isRepeat = false;
  isShuffle = false;
  originSongs: ISong[];
  username: string;
  playlist: any;
  listMyPlaylist: any[];
  constructor(private songService: SongService,
    private playerService: PlayerService,
    private userService: UserService,
    private playlistService: PlaylistService,
    private modalService: NgbModal,
    private authService: AuthenticationService,
    private route: Router) {
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.userService.getUserByUsername(this.username).subscribe(user => {
      console.log(user);
      this.playlist.user = user.data;
    });
    this.playlistService.getAllPlaylistByUser(this.username).subscribe(list => {
      console.log(list);
      this.listMyPlaylist = list.data;
    });
    this.player = this.playerService.player$;
    this.player.subscribe(songs => {
      this.songList = songs;
      this.currentSong = this.songList[0];
      this.length = this.songList.length;
    });
  }

  open(song: ISong) {
    if (this.authService.isUserLoggedIn()) {
      const modal = this.modalService.open(SongCommentComponent, { size: 'lg', scrollable: true });
      modal.componentInstance.song = song;
    } else {
      this.route.navigate(['/login']);
    }
  }

  shuffleList() {
    this.isShuffle = !this.isShuffle;
    if (this.isShuffle) {
      this.originSongs = this.songList;
      this.songList = this.shuffle(this.songList);
    } else {
      this.player = this.playerService.player$;
      this.player.subscribe(song => {
        this.songList = this.originSongs;
      });
    }
  }

  upNumberOfPlays() {
    this.currentSong.numberOfPlays = this.currentSong.numberOfPlays + 1;
    this.songService.updateSong(this.currentSong).subscribe();
  }

  nextSong() {
    this.upNumberOfPlays();
    this.playerService.historySong(this.currentSong);
    if (this.isRepeatOne) {
      console.log(this.songIndex);
      this.currentSong = this.songList[this.songIndex];
    } else
      if (this.songIndex < this.length - 1) {
        this.songIndex++;
        this.currentSong = this.songList[this.songIndex];
      } else {
        if (this.isRepeat) {
          this.songIndex = 0;
          this.currentSong = this.songList[0];
        }
      }
  }


  backSong() {
    if (this.songIndex > 0) {
      this.songIndex--;
      this.currentSong = this.songList[this.songIndex];
    }
  }

  forwardSong() {
    if (this.songIndex < this.length - 1) {
      this.songIndex++;
      this.currentSong = this.songList[this.songIndex];
    }
  }

  shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  addSongToPlaylist(object: IPlaylist) {
    object.songs.push(this.currentSong);
    this.playlistService.updatePlaylist(object).subscribe();
    this.updateLocalStorage();
    this.playerService.addPlayList(object.songs);
    this.playerService.historyPlaylist(object);
  }
  updateLocalStorage() {
    this.playerService.addPlayList(this.playlist.songs);
    this.playerService.historyPlaylist(this.playlist);
  }
}
