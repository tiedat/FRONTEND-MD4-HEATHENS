import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './component/homepage/homepage.component';
import {NotFoundComponent} from './component/not-found/not-found.component';


const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'mymusic', loadChildren: () => import('./personal-music/personal-music.module').then(m => m.PersonalMusicModule),
  },
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
