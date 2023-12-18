import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './pages/connection/connection.component';
import { SpotifyComponent } from './pages/spotify/spotify.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CreatAccountComponent } from './pages/creat-account/creat-account.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  {path:"connection",component:ConnectionComponent},
  {path:"spotify",component:SpotifyComponent},
  {path:"accueil",component:AccueilComponent},
  {path:"creat",component:CreatAccountComponent},
  {path:"profil",component:ProfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
