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

  VerPeliculas(item: any): void {

    const peliculaId = item.id;
    this.router.navigate([ '/view',  peliculaId  ]);
  }



}
