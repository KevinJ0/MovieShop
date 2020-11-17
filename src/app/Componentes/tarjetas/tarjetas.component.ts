import { Movie } from './../../Interfaces/cartelera-response';
import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  VerPeliculas(item: Movie): void {

    const peliculaId = item.id;
    this.router.navigate([ '/view',  peliculaId  ]);
    console.log(item.poster_path)
  }
  // onMovieClick(item: Movie){
  //   console.log(item);

  // }



}
