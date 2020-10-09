import { CastResponse } from './../Interfaces/Castresponse';
import { MovieResponse } from './../Interfaces/MovieResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CarteleraResponse} from '../Interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  // Optimizacion del servicio
  private apikey = '79279b415e6f8506ed9d11b5eede79ce';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  // Optimizacion del servicio
  URL_API = `https://api.themoviedb.org/3/movie/popular?api_key=79279b415e6f8506ed9d11b5eede79ce&language=en-US&page=1`;
  Url = `https://api.themoviedb.org/3/movie/now_playing?api_key=79279b415e6f8506ed9d11b5eede79ce&language=es-ES&page=1`;
  constructor(private http: HttpClient) { }

  public getAllMovies(): Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>(this.URL_API).
      pipe(map((data: any) => data.results));

  }

  // https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

  getSearch( termino: string ): Observable<CarteleraResponse>{
    const url = `${ this.urlMoviedb }/search/movie?query=${ termino }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&include_adult=true`;
    return this.http.get<CarteleraResponse>( url ).pipe(map((data: any) => data.results));
  }

  getCartelera(): Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>(this.Url).pipe(map((resp) => resp));
  }

  getSerie(): Observable<CarteleraResponse>{
    const url = `${this.urlMoviedb}/tv/popular?api_key=${this.apikey}&language=es-ES`;
    return this.http.get<CarteleraResponse>(url).pipe(map((data: any) => data.results));
  }

 getDetalle(id: string) {
  return this.http.get<MovieResponse>(`${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es-ES`).pipe(
    catchError(err => of(null))
    );
 }

 getCast(id: string){
  return this.http.get<CastResponse>(`${this.urlMoviedb}/movie/${id}/credits?api_key=${this.apikey}&language=es-ES`).pipe(
    map(resp => resp.cast),
    catchError(err => of([]))
  );
}

}
