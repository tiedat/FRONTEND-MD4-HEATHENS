import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { environment } from '../environments/environment';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { MiniplayerComponent } from './component/miniplayer/miniplayer.component';
import { AuthHttpInterceptorService } from './services/authHttpInterceptor.service';
import { CaroselBannerComponent } from './component/homepage/carosel-banner/carosel-banner.component';
import { NewSongComponent } from './component/new-song/new-song.component';
import { MostListenSongComponent } from './component/most-listen-song/most-listen-song.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselMostSongComponent } from './component/homepage/carousel-most-song/carousel-most-song.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CustomDatePipe } from './interface/custom.datepipe';
import { CarouselNewSongComponent } from './component/homepage/carousel-new-song/carousel-new-song.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarouselComponent } from './component/homepage/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    MiniplayerComponent,
    CaroselBannerComponent,
    NewSongComponent,
    MostListenSongComponent,
    CarouselMostSongComponent,
    CustomDatePipe,
    CarouselNewSongComponent,
    FooterComponent,
    CarouselComponent
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
    BrowserAnimationsModule,
    SlickCarouselModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
