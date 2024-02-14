import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AddRemoveFavorite } from '../../state/weather.actions';
import { GetWeatherService } from '../../services/get-weather.service';
import { Router } from '@angular/router';
import { ICurrentWeather } from '../../services/ICurrentWeather';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit, AfterViewChecked {
  favorites!: { cityKey: string; cityName: string }[];
  currentWeather: { temp: number; icon: number }[] = [];
  darkMode: boolean = false;
  useF: boolean = false;

  constructor(
    private store: Store<{ weather: any }>,
    private weatherService: GetWeatherService,
    private router: Router
  ) {}

  currentWeatherMockData: ICurrentWeather[] = [
    {
      LocalObservationDateTime: '2024-02-11T11:03:00+02:00',
      EpochTime: 1707642180,
      WeatherText: 'Clouds and sun',
      WeatherIcon: 4,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 17.8,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 64,
          Unit: 'F',
          UnitType: 18,
        },
      },
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
    },
  ];

  ngOnInit(): void {
    this.store.select('weather').subscribe((state) => {
      this.favorites = [...state.favorites];
      this.darkMode = state.darkMode;
      this.useF = state.useFarenheit;
    });
  }

  ngAfterViewChecked(): void {
    this.favorites?.forEach((favorite, idx) => {
      this.weatherService.getCurrentWeatherData(favorite.cityKey).subscribe(
        (data) => {
          this.currentWeather[idx] = {
            temp: data?.[0].Temperature.Metric.Value,
            icon: data?.[0].WeatherIcon,
          };
        },
        (error) => {
          this.currentWeather[idx] = {
            temp: this.currentWeatherMockData?.[0].Temperature.Metric.Value,
            icon: this.currentWeatherMockData?.[0].WeatherIcon,
          };
        }
      );
    });
  }

  removeFavorite(payload: { cityKey: string; cityName: string }) {
    this.store.dispatch(AddRemoveFavorite(payload));
  }

  navigateToDetails(payload: { cityKey: string; cityName: string }) {
    this.weatherService.getAutoCompleteData(payload.cityName);
    this.router.navigate(['']);
  }
}
