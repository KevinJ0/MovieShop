import { Movie } from './../../Interfaces/cartelera-response';
import { Router } from '@angular/router';
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
  GenresJson: any;


  constructor(private peliculaSvc: PeliculasService,
              private router: Router) { }

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

  //devuelve el tipo de genero de la pelicula según el id_genre y cant es para la cantidad de generos a devolver
  getGenero(peli: any, cant: number): string[] {
    var generosList: string[] = [];
    var count: number = 0;
    for (var i = 0; i < this.GenresJson.length; i++) {
      if (this.GenresJson[i].id == peli.genre_ids[count]) {
        count++;
        generosList.push(this.GenresJson[i].name);
        if (generosList.length >= cant) {
          console.log(generosList);
          return generosList;
        }
      }
    }
    return generosList;
  }
  VerPeliculas(peli: Movie) {
    const id = peli.id
    this.router.navigate(['/view', id ]);
    console.log(peli)
  }
master
}
