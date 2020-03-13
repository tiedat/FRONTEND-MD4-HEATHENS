import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LiveComponent} from '../components/live/live.component';
import {SongService} from '../services/song.service';

const routes: Routes = [
  {
    path: '', component: LiveComponent
  }
];

@NgModule({
  declarations: [LiveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [SongService]
})
export class UserModule { }
