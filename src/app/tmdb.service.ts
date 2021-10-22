import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import TMDBMovie from 'src/models/TMDBMovie';

@Injectable({
  providedIn: 'root'
})
export class TMDBService {

  private baseUrl = 'https://api.themoviedb.org/3/search/movie'

  constructor(private http: HttpClient) { }

  getMoviesByTitle(title: string, page = 1): Observable<TMDBMovie | any> {
    const params = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('query', title)
      .set('page', page)
    return this.http.get(`${this.baseUrl}?${params}`)
  }
}
