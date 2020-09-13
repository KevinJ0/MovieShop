import { Component } from '@angular/core';
import { PeliculasService } from '../../Service/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private pelisevi: PeliculasService) { }

  buscar(termino: string) {
    this.pelisevi.getSearch(termino).subscribe((data: any) => (
      console.log(data)
    ));
    console.log(termino);
  }
}
