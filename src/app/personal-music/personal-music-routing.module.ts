import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PersonalMusicComponent} from './personal-music.component';
import {UploadSongComponent} from './upload-song/upload-song.component';

const routes: Routes = [
  {
    path: '', component: PersonalMusicComponent,
    children: [
      {path: 'upload', component: UploadSongComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalMusicRoutingModule {
}
