import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetWeatherService } from './services/get-weather.service';
import { SearchComponent } from './components/search/search.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { LoadFavorites } from './state/weather.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SearchComponent,
    WeatherDetailsComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  count: number = 0;

  constructor(
    private store: Store<{ weather: Object }>,
    private weatherService: GetWeatherService
  ) {
    this.store.select('weather');
  }

  ngOnInit(): void {
    this.weatherService.getAutoCompleteData('Tel Aviv');

    this.store.dispatch(LoadFavorites());

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log('lat: ', lat);
        console.log('long: ', long);
      },
      (error) => {
        console.log('error');
      }
    );
  }
}
