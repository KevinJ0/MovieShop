import { Movie } from './../../Interfaces/cartelera-response';
import { Router } from '@angular/router';
import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
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

  @Input() Peli:any[] = [];



  constructor(private peliculaSvc: PeliculasService,
              private router: Router) { }
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

  VerPeliculas(peli: Movie) {
    const id = peli.id
    this.router.navigate(['/view', id ]);
    console.log(peli)
  }

}
