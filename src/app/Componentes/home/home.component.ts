import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../Service/peliculas.service';
import { Movie } from '../../Interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];
  public serie: Movie[] = [];
  
  public Movies_Features = {
    POPULAR: "popular",
    UPCOMING: "upcoming",
    TOP_RATED: "top_rated",
    NOW_PLAYING: "now_playing"
  };

  constructor( private peliculaservice: PeliculasService) { }

  ngOnInit(): void {
    this.peliculaservice.getCartelera().subscribe( resp => {
      // console.log(resp);
      this.movies = resp.results;
    });

    this.peliculaservice.getSerie().subscribe( serie => {
      this.serie = serie.results;
    });
  }

}
