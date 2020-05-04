import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SongService} from '../../services/song.service';
import {ISong} from '../../interface/song';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.scss']
})
export class SearchAllComponent implements OnInit {
  // searchValue;
  @Input() songList: any[];
  @Input() playlistList: any[];
  @Output() changeSongs: EventEmitter<any> = new EventEmitter();
  @Output() changePlaylist: EventEmitter<any> = new EventEmitter();
  constructor(private route: ActivatedRoute,
              private songService: SongService,
              private playerService: PlayerService,) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.searchValue = params.get('textSearch');
    //   console.log(this.searchValue);
    //   this.songService.getSongByName(this.searchValue).subscribe(list => {
    //     this.songList = list.data;
    //     console.log(this.songList);
    //   });
    // });
  }
  showSongs() {
    this.changeSongs.emit();
  }
  showPlaylist() {
    this.changePlaylist.emit();
  }
  playMusic(song: ISong) {
    this.playerService.addSong(song);
    this.playerService.changePlayStatus(true);
  }
}
