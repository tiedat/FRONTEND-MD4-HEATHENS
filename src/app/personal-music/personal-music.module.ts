import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonalMusicRoutingModule} from './personal-music-routing.module';
import {PersonalMusicComponent} from './personal-music.component';
import {UploadSongComponent} from './upload-song/upload-song.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [PersonalMusicComponent, UploadSongComponent],
  imports: [
    CommonModule,
    PersonalMusicRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  // providers: [UserService]
})
export class PersonalMusicModule {
}
