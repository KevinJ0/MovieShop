import { AfterContentInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PeliculasService } from '../../Service/peliculas.service';
import { Observable } from 'rxjs';
import { carousel } from '../../../assets/js/carousel';


// init Swiper:
//#region metodo declarado en un archivo js
declare function carousel(): any;
////#endregion


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./carousel.component.css']
})



export class CarouselComponent implements OnInit {
  @Input() title: string;
  @Input() feature: string;


  constructor(private peliculaSvc: PeliculasService) { }
  peliculas: Observable<any>;
  GenresList: Observable<any>;

  

  ngOnInit(): void {
    carousel(); // inicializo el carousel swiper
    this.setAllMovies(this.feature);
    console.log("Todas las peliculas han sido cargadas");

    this.GenresList = this.peliculaSvc.getGenrers(); //.subscribe(r => { r = this.GenresJson });

  }

  setAllMovies(data: string) {

    this.peliculas = this.peliculaSvc.getListofMovies(data);
  }

}
