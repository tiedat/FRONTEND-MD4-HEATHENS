import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchAllComponent} from './search-all/search-all.component';
import {SearchSongsComponent} from './search-songs/search-songs.component';
import {SearchPageComponent} from './search-page.component';

const routes: Routes = [
  {
    path: '', component: SearchPageComponent,
    children: [
      {path: 'search', component: SearchAllComponent},
      {path: 'songs', component: SearchSongsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchPageRoutingModule {
}
