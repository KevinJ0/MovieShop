import { CarteleraResponse, Movie } from './../../Interfaces/cartelera-response';
import { Component } from '@angular/core';
import { PeliculasService } from '../../Service/peliculas.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // resultado: any[] = [];
  loading: boolean;
  items: any[] = [];

  constructor(private pelisevi: PeliculasService,
              private router : Router) { }

  ngOnInit(): void {
    this.buscar("a")

  }

  buscar(termino: string): void {
    console.log(termino);
    this.loading = true;
    this.pelisevi.getSearch(termino).subscribe((data: any) => {
      console.log(data);
      this.items = data.filter(data =>data.poster_path !== null);
      this.loading = false;
    });
  }

  VerPeliculas(item: Movie): void {

    const peliculaId = item.id;
    this.router.navigate([ '/view',  peliculaId  ]);
    console.log(item.poster_path)
  }
}
