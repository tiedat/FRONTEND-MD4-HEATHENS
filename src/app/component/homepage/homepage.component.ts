import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  songList: any[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllSong().subscribe( result => {
      this.userService = result.data;
    });
  }

}
