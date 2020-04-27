import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SongService} from '../../services/song.service';

@Component({
  selector: 'app-search-songs',
  templateUrl: './search-songs.component.html',
  styleUrls: ['./search-songs.component.scss']
})
export class SearchSongsComponent implements OnInit {
  @Input() songList: any[];
  searchValue: any;
  constructor(private route: ActivatedRoute,
              private songService: SongService) { }

  ngOnInit() {

  }
}
