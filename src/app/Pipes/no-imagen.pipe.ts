import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImagen'
})
export class NoImagenPipe implements PipeTransform {

  transform(poster: string ): string {
    if(poster) {
      return `https://image.tmdb.org/t/p/w200${poster}`;
    }else {
      return './assets/img/no-image.jpg';
    } 
  }
}



