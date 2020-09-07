import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { SearchComponent } from './Componentes/search/search.component';
import { NavbarComponent } from './Componentes/shared/navbar/navbar.component';
import { AuthService } from './Service/auth.service';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { PeliculaComponent } from './pelicula/pelicula.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
=======
import { ProfileComponent } from './Componentes/profile/profile.component';
>>>>>>> 8ace605d274b590491e0a5677362d84a5e27b9d5

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
<<<<<<< HEAD
    CallbackComponent,
    PeliculaComponent   
=======
    ProfileComponent
>>>>>>> 8ace605d274b590491e0a5677362d84a5e27b9d5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
