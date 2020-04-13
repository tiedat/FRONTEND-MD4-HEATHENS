import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FRONT-END-MD4-HEATHENS';
  formGroup = new FormGroup({
    searchName: new FormControl(),
  });
  searchName: any;
  constructor(private userService: UserService,
              private route: Router,
              private data: DataService) {
  }
  search() {
    const searchValue = this.formGroup.get('searchName').value;
    console.log(searchValue);
    this.route.navigate(['search'], { queryParams: { search: searchValue } }).then((e) => {
      console.log('Navigation is successful!');
    });
  }
}
