import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = environment.apiKey;

  private params = {
    api_key: this.apiKey,
    page: '1',
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    sort_by: 'popularity.desc',
  };

  private token =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWEwMTg0MTNmZTE3NmNlYzgzZDU5N2RkMzhiMzc3MSIsIm5iZiI6MTczMzQ2NTEwMC42OTI5OTk4LCJzdWIiOiI2NzUyOTQwYzM3ZjE4NTYyMDIwODhlMDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mxqHVoOJqyAATyC-2lLcvzLGGvgHS1xzGCUFPWx6kFA';

  private headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: this.token,
  });

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', {
      params: this.params,
      headers: this.headers,
    });
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', {
      headers: this.headers,
    });
  }

  getRatedMovies(guestSessionId: string) {
    const url = `https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies`;
    return this.http.get(url, {
      headers: this.headers,
    });
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, {
      headers: this.headers,
    });
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
      headers: this.headers,
    });
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: this.headers,
    });
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', {
      headers: this.headers,
    });
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', {
      headers: this.headers,
    });
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', {
      headers: this.headers,
    });
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', {
      headers: this.headers,
    });
  }
}
