import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Increment, Decrement } from './state/weather.actions';
import { Store } from '@ngrx/store';
import { GetWeatherService } from './services/get-weather.service';
import { SearchComponent } from './components/search/search.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SearchComponent,
    WeatherDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  count: number = 0;

  constructor(
    private store: Store<{ count: number }>,
    private weatherService: GetWeatherService
  ) {
    store.select('count').subscribe((data) => (this.count = data));
  }
  add() {
    console.log(Increment());

    this.store.dispatch(Increment());
  }
  subtract() {
    this.store.dispatch(Decrement());
  }

  ngOnInit(): void {
    this.weatherService.get5DayForecast();
  }
}
