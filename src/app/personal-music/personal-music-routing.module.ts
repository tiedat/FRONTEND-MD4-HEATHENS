import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PersonalMusicComponent} from './personal-music.component';
import {UploadSongComponent} from './song/upload-song/upload-song.component';
import {MyAllSongComponent} from './song/my-all-song/my-all-song.component';
import {EditSongComponent} from './song/edit-song/edit-song.component';
import {MyAllPlaylistComponent} from './playlist/my-all-playlist/my-all-playlist.component';
import {MyPlaylistComponent} from './playlist/my-playlist/my-playlist.component';

const routes: Routes = [
  {
    path: '', component: PersonalMusicComponent,
    children: [
      {path: 'upload', component: UploadSongComponent},
      {path: 'songs', component: MyAllSongComponent},
      {path: 'playlist', component: MyAllPlaylistComponent},
      {path: 'playlist/:id', component: MyPlaylistComponent},
      {path: 'songs/edit/:id', component: EditSongComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalMusicRoutingModule {
}
