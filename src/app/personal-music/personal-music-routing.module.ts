import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PersonalMusicComponent} from './personal-music.component';
import {UploadSongComponent} from './upload-song/upload-song.component';
import {MyAllSongComponent} from './my-all-song/my-all-song.component';
import {EditSongComponent} from './edit-song/edit-song.component';
import {MyAllPlaylistComponent} from './my-all-playlist/my-all-playlist.component';
import {MyLibraryComponent} from './my-library/my-library.component';

const routes: Routes = [
  {
    path: '', component: PersonalMusicComponent,
    children: [
      {path: '', component: MyLibraryComponent},
      {path: 'upload', component: UploadSongComponent},
      {path: 'songs', component: MyAllSongComponent},
      {path: 'playlist', component: MyAllPlaylistComponent},
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
