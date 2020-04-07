import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSongsComponent } from './search-songs/search-songs.component';
import { SearchAllComponent } from './search-all/search-all.component';
import { SearchPageComponent } from './search-page.component';
import {SearchPageRoutingModule} from './search-page-routing.module';



@NgModule({
  declarations: [SearchSongsComponent, SearchAllComponent, SearchPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule
  ]
})
export class SearchPageModule { }
