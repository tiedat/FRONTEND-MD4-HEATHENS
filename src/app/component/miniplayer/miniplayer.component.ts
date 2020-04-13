import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-miniplayer',
  templateUrl: './miniplayer.component.html',
  styleUrls: ['./miniplayer.component.scss']
})
export class MiniplayerComponent implements OnInit {
  @Input() songList: any[];
  @Input() songPlayed: any;
  constructor() { }

  ngOnInit(): void {
  }

}
