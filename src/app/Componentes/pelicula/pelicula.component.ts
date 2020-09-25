import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../Service/peliculas.service';
import { Observable } from 'rxjs';
import { carousel } from '../../../assets/js/carousel';
import { CarteleraResponse } from '../../Interfaces/cartelera-response';

//#region metodo declarado en un archivo js
declare function carousel(): any;
////#endregion
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})


export class PeliculaComponent implements OnInit {


  constructor(private peliculaSvc: PeliculasService) { }

  peliculas: Observable<CarteleraResponse>;
  pelicula: any;
  ngOnInit(): void {
    carousel();
    this.getAllMovies();
    this.peliculas.subscribe(to => console.log(to.results));
  }
  getAllMovies() {

    this.peliculas = this.peliculaSvc.getAllMovies();
    console.log(this.peliculas);
  }


}
