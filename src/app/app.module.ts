import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { SearchComponent } from './Componentes/search/search.component';
import { NavbarComponent } from './Componentes/shared/navbar/navbar.component';
import { AuthService } from './Service/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { PeliculaComponent } from './Componentes/pelicula/pelicula.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './Componentes/profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TarjetasComponent } from './Componentes/tarjetas/tarjetas.component';
import { CutTextPipe } from './Pipes/cut-text.pipe';
import { NoImagenPipe } from './Pipes/no-imagen.pipe';
import { ViewComponent } from './Componentes/view/view.component';
import { CarouselComponent } from './Componentes/carousel/carousel.component';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    PeliculaComponent,
    ProfileComponent,
    TarjetasComponent,
    CutTextPipe,
    NoImagenPipe,
    ViewComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
