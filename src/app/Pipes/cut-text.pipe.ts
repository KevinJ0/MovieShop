import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, limite: string): string {

    const limit = parseInt(limite);
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
