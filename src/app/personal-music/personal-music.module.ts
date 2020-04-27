import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonalMusicRoutingModule} from './personal-music-routing.module';
import {PersonalMusicComponent} from './personal-music.component';
import {UploadSongComponent} from './song/upload-song/upload-song.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyAllSongComponent } from './song/my-all-song/my-all-song.component';
import { EditSongComponent } from './song/edit-song/edit-song.component';
import { MyAllPlaylistComponent } from './playlist/my-all-playlist/my-all-playlist.component';
import { MyPlaylistComponent } from './playlist/my-playlist/my-playlist.component';


@NgModule({
  declarations: [PersonalMusicComponent,
    UploadSongComponent,
    MyAllSongComponent,
    EditSongComponent,
    MyAllPlaylistComponent,
    MyPlaylistComponent],
  imports: [
    CommonModule,
    PersonalMusicRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class PersonalMusicModule {
}
