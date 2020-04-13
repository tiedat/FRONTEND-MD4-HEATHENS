import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSongsComponent } from './search-songs/search-songs.component';
import { SearchAllComponent } from './search-all/search-all.component';
import { SearchPageComponent } from './search-page.component';
import {SearchPageRoutingModule} from './search-page-routing.module';
import { SearchSingerComponent } from './search-singer/search-singer.component';
import { SearchPlaylistComponent } from './search-playlist/search-playlist.component';



@NgModule({
  declarations: [SearchSongsComponent, SearchAllComponent, SearchPageComponent, SearchSingerComponent, SearchPlaylistComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule
  ]
})
export class SearchPageModule { }
