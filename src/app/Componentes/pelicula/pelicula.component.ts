import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../Service/peliculas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  constructor(private peliculaSvc: PeliculasService) { }

  peliculas: Observable<any>;
  pelicula:any; 
  ngOnInit(): void {

    this.getAllMovies();
   this.peliculas.subscribe(to =>  console.log(to))

  }  
  getAllMovies() {

    this.peliculas = this.peliculaSvc.getAllMovies();
  }

}
