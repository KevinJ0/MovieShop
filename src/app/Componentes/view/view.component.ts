import { Cast } from './../../Interfaces/Castresponse';
import { MovieResponse } from './../../Interfaces/MovieResponse';
import { PeliculasService } from './../../Service/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public pelicula:MovieResponse;
  public cast:Cast[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private PeliculasService: PeliculasService,
              private location: Location,
              private Router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    
    this.PeliculasService.getDetalle(id).subscribe(movie => {
      if (!movie) {
        this.Router.navigateByUrl('/home')
        return;
      }
      this.pelicula = movie;
    });

    this.PeliculasService.getCast(id).subscribe(cast => {
      // filtrando resultado para que solo mueste cast que tenga fotos
      this.cast = cast.filter(actor =>actor.profile_path !== null);
    })
    
  }
   onRegresar(){
     this.location.back();
   }

}
