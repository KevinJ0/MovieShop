import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImagen'
})
export class NoImagenPipe implements PipeTransform {

  transform(item: any ): any {

    if (item.backdrop_path) {
      return item.backdrop_path;
    }else {
      if ( item.poster_path) {
        return item.poster_path;
      }else {
        return 'assets/img/no-imagen.jpg';
      }
    }
  }
}
