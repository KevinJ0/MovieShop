import { MovieResponse } from './../../Interfaces/MovieResponse';
import { PeliculasService } from './../../Service/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private PeliculasService: PeliculasService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    
    this.PeliculasService.getDetalle(id).subscribe(movie => {
      console.log(movie);
    });
    
    
  }

}
