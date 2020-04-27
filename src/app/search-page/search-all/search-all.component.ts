import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SongService} from '../../services/song.service';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.scss']
})
export class SearchAllComponent implements OnInit {
  @Input() songList: any[];
  @Input() playlistList: any[];
  @Output() changeSongs: EventEmitter<any> = new EventEmitter();
  @Output() changePlaylist: EventEmitter<any> = new EventEmitter();
  constructor(private route: ActivatedRoute,
              private songService: SongService) { }

  ngOnInit() {}
  showSongs() {
    this.changeSongs.emit();
  }
  showPlaylist() {
    this.changePlaylist.emit();
  }
}
