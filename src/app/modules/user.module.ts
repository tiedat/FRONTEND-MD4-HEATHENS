import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LiveComponent} from '../components/live/live.component';
import {SongService} from '../services/song.service';
import {SongComponent} from '../components/song/song.component';

const routes: Routes = [
  {
    path: '', component: LiveComponent
  },
  {
    path: 'song', component: SongComponent
  }
];

@NgModule({
  declarations: [LiveComponent, SongComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [SongService]
})
export class UserModule { }
