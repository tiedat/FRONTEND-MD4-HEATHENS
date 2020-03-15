import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './component/homepage/homepage.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {environment} from '../environments/environment';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { MiniplayerComponent } from './component/miniplayer/miniplayer.component';

<<<<<<< HEAD
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
>>>>>>> play music

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomepageComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    MiniplayerComponent,
=======
>>>>>>> play music
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
