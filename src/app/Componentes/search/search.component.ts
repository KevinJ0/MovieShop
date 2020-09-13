import { Component } from '@angular/core';
import { PeliculasService } from '../../Service/peliculas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  resultado: any[] = [];
  loading: boolean;

  constructor(private pelisevi: PeliculasService) { }

  buscar(termino: string){
    console.log(termino);
    this.loading = true;
    this.pelisevi.getSearch(termino).subscribe((data: any) => {
      console.log(data);
      this.resultado = data;
      this.loading = false;

    });
  }
}
