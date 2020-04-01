import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonalMusicRoutingModule} from './personal-music-routing.module';
import {PersonalMusicComponent} from './personal-music.component';
import {UploadSongComponent} from './upload-song/upload-song.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyAllSongComponent } from './my-all-song/my-all-song.component';
import { EditSongComponent } from './edit-song/edit-song.component';


@NgModule({
  declarations: [PersonalMusicComponent, UploadSongComponent, MyAllSongComponent, EditSongComponent],
  imports: [
    CommonModule,
    PersonalMusicRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  // providers: [SongService]
})
export class PersonalMusicModule {
}
