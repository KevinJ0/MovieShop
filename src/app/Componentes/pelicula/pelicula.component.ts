import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../Service/peliculas.service';
import { Observable } from 'rxjs';

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

  peliculas: Observable<any>;
  pelicula: any;
  ngOnInit(): void {
    carousel();
    this.getAllMovies();
    this.peliculas.subscribe(to => console.log(to))



  }
  getAllMovies() {

    this.peliculas = this.peliculaSvc.getAllMovies();
  }


}
