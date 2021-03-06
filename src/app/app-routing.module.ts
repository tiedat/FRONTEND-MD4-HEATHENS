import { MostListenSongComponent } from './component/most-listen-song/most-listen-song.component';
import { NewSongComponent } from './component/new-song/new-song.component';
import { AuthGaurd } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new-song', component: NewSongComponent },
  { path: 'chart', component: MostListenSongComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'search',
    loadChildren: () => import('./search-page/search-page.module').then(m => m.SearchPageModule)
  },
  {
    path: 'mymusic',
    loadChildren: () => import('./personal-music/personal-music.module').then(m => m.PersonalMusicModule),
    canActivate: [AuthGaurd]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
