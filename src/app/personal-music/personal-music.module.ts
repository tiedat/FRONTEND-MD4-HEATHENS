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
import { HistoryComponent } from './history/history.component';
import { SongHistoryComponent } from './history/song-history/song-history.component';
import { PlaylistHistoryComponent } from './history/playlist-history/playlist-history.component';
import {MyPlaylistComponent} from './playlist/my-playlist/my-playlist.component';


@NgModule({
  declarations: [PersonalMusicComponent,
    UploadSongComponent,
    MyAllSongComponent,
    EditSongComponent,
    MyAllPlaylistComponent,
    MyPlaylistComponent,
    HistoryComponent,
    SongHistoryComponent,
    PlaylistHistoryComponent],
  imports: [
    CommonModule,
    PersonalMusicRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class PersonalMusicModule {
}
