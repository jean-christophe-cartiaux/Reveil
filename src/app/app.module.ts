import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpotifyComponent } from './pages/spotify/spotify.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CreatAccountComponent } from './pages/creat-account/creat-account.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    NavbarComponent,
    SpotifyComponent,
    AccueilComponent,
    CreatAccountComponent,
    ProfilComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
