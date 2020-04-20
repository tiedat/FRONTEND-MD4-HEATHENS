import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonalMusicRoutingModule} from './personal-music-routing.module';
import {PersonalMusicComponent} from './personal-music.component';
import {UploadSongComponent} from './upload-song/upload-song.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyAllSongComponent } from './my-all-song/my-all-song.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { MyAllPlaylistComponent } from './my-all-playlist/my-all-playlist.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import {AppModule} from '../app.module';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { MiniPersonalPlayerComponent } from './mini-personal-player/mini-personal-player.component';


@NgModule({
  declarations: [PersonalMusicComponent,
    UploadSongComponent,
    MyAllSongComponent,
    EditSongComponent,
    MyAllPlaylistComponent,
    MyLibraryComponent,
    MyPlaylistComponent,
    MiniPersonalPlayerComponent],
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
