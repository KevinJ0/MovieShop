import { Cast, CastResponse } from './../Interfaces/Castresponse';
import { Genre, MovieResponse } from './../Interfaces/MovieResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarteleraResponse, Genres, Movie } from '../Interfaces/cartelera-response';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  // Optimizacion del servicio
  private apikey = '79279b415e6f8506ed9d11b5eede79ce';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  headerpages = 0;
  // Optimizacion del servicio
  Url = `${this.urlMoviedb}/movie/now_playing?api_key=${this.apikey}&language=es-ES&page=1`;
  
  constructor(private http: HttpClient) { }


// Modifica es peticion
  public getListofMovies(Feature: string): Observable<CarteleraResponse> {
    const url = `${this.urlMoviedb}/movie/${Feature}?api_key=${this.apikey}&language=es&include_adult=true`;
    return this.http.get<CarteleraResponse>(url).
      pipe(map((data: any) => data.results));
  }

  getSearch(termino: string): Observable<CarteleraResponse> {
    this.headerpages++;
    const url = `${this.urlMoviedb}/search/movie?query=${termino}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get<CarteleraResponse>(url).pipe(map((data: any) => data.results));
  }

  getCartelera(): Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>(this.Url).pipe(map((resp) => resp));
  }

  getSerie(): Observable<CarteleraResponse> {
    const url = `${this.urlMoviedb}/tv/popular?api_key=${this.apikey}&language=es-ES`;
    return this.http.get<CarteleraResponse>(url).pipe(map((data: any) => data.results));
  }

  getGenrers(): Observable<Genre> {
    const url = `${this.urlMoviedb}/genre/movie/list?api_key=${this.apikey}`;
    return this.http.get<Genre>(url).pipe(map((data: any) => { return data.genres }));
  }
  getDetalle(id: string) {
    return this.http.get<MovieResponse>(`${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es-ES`)
    .pipe(
      catchError(err => of(null))
    );
 }

 getCast(id: string):Observable<Cast[]>{
  return this.http.get<CastResponse>(`${this.urlMoviedb}/movie/${id}/credits?api_key=${this.apikey}&language=es-ES`).pipe(
    map(resp => resp.cast),
    catchError(err => of([]))
  );
}
  }
  

