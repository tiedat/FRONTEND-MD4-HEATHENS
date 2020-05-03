import { Component, OnInit } from '@angular/core';
import { IPlaylist } from '../../interface/playlist';
import { ISong } from '../../interface/song';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistService } from '../../services/playlist.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SongService } from '../../services/song.service';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/services/player.service';
import {ICmt} from '../../interface/cmt';
import {UserService} from '../../services/user.service';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.scss']
})
export class MyPlaylistComponent implements OnInit {
  numberSong = 0;
  isPlayMusic = false;
  songListAll: any[];
  message: string;
  isShow = false;
  isSuccess = true;
  isLoading = false;
  isPlay: Observable<boolean>;
  songPlayed: ISong;
  song: ISong = {
    name: '',
    description: '',
    fileMp3: '',
    image: '',
    numberOfPlays: 0,
    user: {}
  };
  playlist: IPlaylist = {
    id: 0,
    description: '',
    image: '',
    name: '',
    songs: [{}],
  };
  playlistForm: any;
  cmtPlaylistForm: FormGroup;
  username: string;
  commentPost: ICmt = {
    content: '',
    playlist: {},
    user: {}
  };
  constructor(private route: ActivatedRoute,
              private playlistService: PlaylistService,
              private fb: FormBuilder,
              private router: Router,
              private songService: SongService,
              private playerService: PlayerService,
              private commentService: CommentService,
              private userService: UserService, ) { }
  ngOnInit() {
    this.playlistForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      description: '',
    });
    this.route.paramMap.subscribe(params => {
      const idSearch = Number(params.get('id'));
      this.playlistService.getPlaylist(idSearch).subscribe(playlist => {
        this.playlist = playlist.data;
        this.commentPost.playlist = this.playlist;
        this.playlistForm.controls.name.setValue(this.playlist.name);
      });
    });
    this.songService.getAllSong().subscribe(list => {
      this.songListAll = list.data;
    });
    this.isPlay = this.playerService.isPlay$;
    this.cmtPlaylistForm = this.fb.group({
      content: this.fb.control('', [Validators.required]),
    });
  }
  editName() {
    this.playlist.name = this.playlistForm.get('name').value;
    this.playlistService.updatePlaylist(this.playlist).subscribe(result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Sửa thành công!';
      this.isLoading = false;
      this.ngOnInit();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Sửa thất bại!';
      this.isLoading = false;
    });
  }

  deletePlaylist() {
    this.playlistService.deletePlaylist(this.playlist.id).subscribe();
    this.router.navigate(['/mymusic/playlist/']).then((e) => {
      this.isShow = true;
      console.log('Navigation is successful!');
    });
  }
  addSongToPlaylist(object: ISong) {
    this.playlist.songs.push(object);
    this.playlist.image = object.image;
    this.playlistService.updatePlaylist(this.playlist).subscribe();
    this.updateLocalStorage();
  }
  subtractSong(i: number) {
    this.playlist.songs.splice(i, 1);
    this.playlistService.updatePlaylist(this.playlist).subscribe();
    this.updateLocalStorage();
  }
  checkAdded(checkValue: number) {
    let check;
    if (this.playlist.songs.length !== 0) {
      for (let i = 0; i < this.playlist.songs.length; i++) {
        if (checkValue === this.playlist.songs[i].id) {
          check = false;
          break;
        } else {
          check = true;
        }
      }
    } else {
      check = true;
    }
    return check;
  }
  playPlaylist() {
    this.isPlayMusic = true;
    if (this.playlist.songs.length > 0) {
      this.updateLocalStorage();
      this.songPlayed = this.playlist.songs[this.numberSong];
      this.playerService.changePlayStatus(true);
    }
  }
  nextSong() {
    this.numberSong += 1;
    this.playPlaylist();
  }

  updateLocalStorage() {
    this.playerService.addPlayList(this.playlist.songs);
    this.playerService.historyPlaylist(this.playlist);
  }
  onPost() {
    this.commentPost.content = this.cmtPlaylistForm.get('content').value;
    console.log(this.commentPost);
    this.commentService.createCmtPlaylist(this.commentPost).subscribe(result => {
      console.log('success');
    });

  }
}
