import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  PUBLIC_KEY = "79279b415e6f8506ed9d11b5eede79ce";
  HASH = "ff168f71981d1efff331f2f37762639e";
  URL_API = `https://api.themoviedb.org/3/movie/popular?api_key=79279b415e6f8506ed9d11b5eede79ce&language=en-US&page=1`;
  constructor(private http: HttpClient) { }

  public getAllMovies(): Observable<any> {
    return this.http.get<any>(this.URL_API).
      pipe(map((data: any) => data.results));

  }
}
