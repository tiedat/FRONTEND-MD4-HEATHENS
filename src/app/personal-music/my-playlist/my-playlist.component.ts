import { Component, OnInit } from '@angular/core';
import {IPlaylist} from '../../interface/playlist';
import {ISong} from '../../interface/song';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaylistService} from '../../services/playlist.service';
import {FormBuilder, Validators} from '@angular/forms';
import {SongService} from '../../services/song.service';

@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.scss']
})
export class MyPlaylistComponent implements OnInit {
  numberSong = 0;
  isPlayMusic = false;
  songPlayed: any;
  songListAll: any[];
  message: string;
  isShow = false;
  isSuccess = true;
  isLoading = false;
  song: ISong = {
    name: '',
    descriptionSong: '',
    fileMp3: '',
    image: '',
    numberOfPlays : 0,
    user: {}
  };
  playlist: IPlaylist = {
    name: '',
    descriptionPlaylist: '',
    image: '',
    songs: [],
    user: {},
  };
  playlistForm: any;
  constructor(private route: ActivatedRoute,
              private playlistService: PlaylistService,
              private fb: FormBuilder,
              private router: Router,
              private songService: SongService) { }
  ngOnInit() {
    this.playlistForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      descriptionPlaylist: '',
    });
    this.route.paramMap.subscribe( params => {
      const idSearch = Number(params.get('id'));
      console.log(idSearch);
      this.playlistService.getPlaylist(idSearch).subscribe(playlist => {
        console.log(playlist);
        this.playlist = playlist.data;
        for (let i = 0; i < this.playlist.songs.length; i++) {
          console.log(this.playlist.songs[i].id);
        }
        console.log(this.playlist.name);
        this.playlistForm.controls.name.setValue(this.playlist.name);
      });
    });
    this.songService.getAllSong().subscribe(list => {
      console.log(list.data);
      this.songListAll = list.data;
    });
  }
  editName() {
    this.playlist.name = this.playlistForm.get('name').value;
    this.playlistService.updatePlaylist(this.playlist).subscribe( result => {
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
    this.song = object;
    console.log(this.song);
    this.playlist.songs.push(object);
    console.log(this.playlist.songs);
    this.playlist.image = object.image;
    this.playlistService.updatePlaylist(this.playlist).subscribe();
  }
  subtractSong(i: number) {
    this.playlist.songs.splice(i, 1 );
    this.playlistService.updatePlaylist(this.playlist).subscribe();
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
    this.songPlayed = this.playlist.songs[this.numberSong];
  }
  nextSong() {
    this.numberSong += 1;
    console.log(this.songPlayed);
    this.playPlaylist();
  }
}
