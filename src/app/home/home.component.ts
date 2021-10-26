import { Component, OnInit, OnDestroy } from '@angular/core';
import { TMDBService } from '../tmdb.service';
import TMDBMovie from 'src/models/TMDBMovie';
import { Direction } from 'src/types/Pagination';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy  {

  loadingMovies = false;

  searchTerm = '';

  movies: TMDBMovie[] = [];

  currentPage$ = new BehaviorSubject<number>(1);

  totalRecords = 0;

  totalPages = 0;

  destroyed$ = new Subject<void>();

  constructor(private tmdbService: TMDBService){ }
  
  ngOnInit(): void {
    this.currentPage$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      if (this.searchTerm){
        this.searchMovies();
      }
    });
  }

  searchMovies(): void {
    this.loadingMovies = true;
    this.tmdbService
      .getMoviesByTitle(this.searchTerm, this.currentPage$.value)
      .subscribe(
        response => { 
          this.movies = response.results;
          this.totalRecords = response.total_results;
          this.totalPages = response.total_pages;
        },
        error => { console.log(error); },
      )
      .add(() => {
        this.loadingMovies = false;
      });
  }

  resetSearch(): void{
    this.movies = [];
    this.searchTerm = '';
    this.changePage(1);
  }

  onPaginationChange(direction: string): void {
    if (direction === Direction.next && this.currentPage$.value < this.totalPages){
      this.changePage(this.currentPage$.value + 1);
    } else if (direction === Direction.previous && this.currentPage$.value > 1) {
      this.changePage(this.currentPage$.value - 1);
    }
  }

  changePage(page: number): void {
    this.currentPage$.next(page);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
