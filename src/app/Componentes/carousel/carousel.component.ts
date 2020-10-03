import { Component, Input, OnInit, Output } from '@angular/core';
import { PeliculasService } from '../../Service/peliculas.service';
import { Observable } from 'rxjs';
import { carousel } from '../../../assets/js/carousel';

//#region metodo declarado en un archivo js
declare function carousel(): any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  @Input() title: string;

  constructor(private peliculaSvc: PeliculasService) { }
  peliculas: Observable<any>;
  pelicula: any;
  ngOnInit(): void {

    carousel();
    this.getAllMovies();
    this.peliculas.subscribe(to => console.log(to));
  }
  getAllMovies() {

    this.peliculas = this.peliculaSvc.getAllMovies();
    console.log(this.peliculas);
  }

}
