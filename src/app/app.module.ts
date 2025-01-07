import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowseComponent } from './pages/browse/browse.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCarouselComponent } from './shared/components/movie-carousel/movie-carousel.component'; // Import HTTP Client Module
import { DescriptionPipe } from './shared/pipes/description.pipe';
import { ImagePipe } from './shared/pipes/image.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animasyon modülünü ekleyin

@NgModule({
  declarations: [AppComponent, LoginComponent, BrowseComponent, HeaderComponent, BannerComponent, MovieCarouselComponent, DescriptionPipe, ImagePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
