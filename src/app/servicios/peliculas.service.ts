import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private url =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=160fec2e6f530be5ea2e68c7daca95b6&language=es';

constructor(private http: HttpClient) {}

getTopMovies() {
  return this.http.get(this.url);
}
}
