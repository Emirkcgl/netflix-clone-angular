import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { IVideoContent } from 'src/app/shared/models/video-content.interface';
import { MovieService } from 'src/app/shared/services/movie.service';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  constructor(private movieService: MovieService, private scrollService: ScrollService) {}

  bannerDetail$ = new Observable<any>();
  bannerVideo$ = new Observable<any>();

  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  ratedMovies: IVideoContent[] = [];

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getTopRated(),
  ];
  //bu dahil değil
  // this.movieService.getRatedMovies(),

  ngOnInit(): void {
    forkJoin(this.sources)
      .pipe(
        map(([movies, tvShows, nowPlaying, popular, topRated, upcoming]) => {
          this.bannerDetail$ = this.movieService.getBannerDetail(movies.results[0].id);
          this.bannerVideo$ = this.movieService.getBannerVideo(movies.results[0].id);

          console.log('Banner Movie ID:', movies.results[0]);

          return { movies, tvShows, nowPlaying, popular, topRated, upcoming };
        })
      )
      .subscribe((res: any) => {
        this.movies = res.movies.results as IVideoContent[];
        this.tvShows = res.tvShows.results as IVideoContent[];
        this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
        this.popularMovies = res.popular.results as IVideoContent[];
        this.topRatedMovies = res.topRated.results as IVideoContent[];
        this.upcomingMovies = res.upcoming.results as IVideoContent[];

        //bu dahil değil
        this.ratedMovies = res.ratedMovies.results as IVideoContent[];
        this.getMovieKey();
      });
  }

  getMovieKey() {
    this.movieService.getBannerVideo(this.movies[0].id).subscribe(res => {
      console.log(res);
    });
  }

  ngAfterViewInit() {
    this.scrollService.scrollToSection$.subscribe(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
