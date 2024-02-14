import { Component, DoCheck, OnInit } from '@angular/core';
import { WeatherDayCardComponent } from '../weather-day-card/weather-day-card.component';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { AddRemoveFavorite, ErrorModal } from '../../state/weather.actions';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Component({
  selector: 'weather-details',
  standalone: true,
  imports: [
    WeatherDayCardComponent,
    CommonModule,
    SearchComponent,
    ErrorModalComponent,
  ],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss',
})
export class WeatherDetailsComponent implements OnInit, DoCheck {
  constructor(private store: Store<{ weather: any }>) {}
  weatherData: any = {};
  isFavorite: boolean = false;
  searchError: boolean = false;
  darkMode: boolean = false;
  useF: boolean = false;

  ngOnInit(): void {
    this.store.select('weather').subscribe((state) => {
      this.weatherData = state;
      this.darkMode = state.darkMode;
      this.useF = state.useFarenheit;
    });
  }

  addRemoveFavorite() {
    this.store.dispatch(
      AddRemoveFavorite({
        cityKey: this.weatherData.cityKey,
        cityName: this.weatherData.cityName,
      })
    );
  }

  ngDoCheck(): void {
    this.store.select('weather').subscribe((state) => {
      this.searchError = state.searchError;
      if (
        state.favorites.find(
          (obj: { cityKey: string }) => obj.cityKey === this.weatherData.cityKey
        )
      ) {
        this.isFavorite = true;
      } else {
        this.isFavorite = false;
      }
    });
  }
}
