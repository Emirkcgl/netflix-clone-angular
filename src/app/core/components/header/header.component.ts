import { Component, Input } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navList = [
    { label: 'Home', id: 'banner' },
    { label: 'Popular', id: 'popular' },
    { label: 'Trending', id: 'trending' },
    { label: 'Now Playing', id: 'now-playing' },
    { label: 'Popular Movies', id: 'popular-movies' },
    { label: 'Top Rated', id: 'top-rated' },
    { label: 'Upcoming', id: 'upcoming' },
  ];
  username: string = 'emir';

  constructor(private scrollService: ScrollService) {}

  navigateTo(section: string) {
    this.scrollService.scrollTo(section);
  }
}
