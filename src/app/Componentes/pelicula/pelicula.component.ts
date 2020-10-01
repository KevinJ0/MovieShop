import { AfterContentInit, Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../Service/peliculas.service';
import { Observable } from 'rxjs';
import { carousel } from '../../../assets/js/carousel';
import { CarteleraResponse } from '../../Interfaces/cartelera-response';

// init Swiper:
//#region metodo declarado en un archivo js
declare function carousel(): any;
////#endregion
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})


export class PeliculaComponent implements OnInit, AfterContentInit {


  constructor(private peliculaSvc: PeliculasService) { }
  peliculas: Observable<any>;

  ngOnInit(): void {
   

  }
  getAllMovies() {

    this.peliculas = this.peliculaSvc.getAllMovies();
    console.log(this.peliculas);
  }

  ngAfterContentInit(): void {
    this.getAllMovies();
    this.peliculas.subscribe(to => carousel());
    console.log("Todas las peliculas han sido cargadas");

  }
}
