import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetWeatherService } from './services/get-weather.service';
import { SearchComponent } from './components/search/search.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { DarkMode, LoadFavorites, useFarenheit } from './state/weather.actions';

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
export class AppComponent implements OnInit, AfterViewInit {
  count: number = 0;
  darkMode: boolean = false;
  useF: boolean = false;
  @ViewChild('darkModeCheckbox') darkModeCheckbox!: ElementRef;
  @ViewChild('farenheitCheckbox') farenheitCheckbox!: ElementRef;

  constructor(
    private store: Store<{ weather: any }>,
    private weatherService: GetWeatherService
  ) {}
  ngAfterViewInit(): void {
    this.darkModeCheckbox.nativeElement.checked = this.darkMode;
    this.farenheitCheckbox.nativeElement.checked = this.useF;
  }

  ngOnInit(): void {
    this.weatherService.getAutoCompleteData('Tel Aviv');

    this.store.dispatch(LoadFavorites());

    this.store.select('weather').subscribe((state) => {
      this.darkMode = state.darkMode;
      this.useF = state.useFarenheit;
    });

    const darkModeLocalStorage = localStorage.getItem('darkMode');
    const unitsLocalStorage = localStorage.getItem('units');

    if (darkModeLocalStorage) {
      this.store.dispatch(
        DarkMode({ darkMode: darkModeLocalStorage === 'false' ? false : true })
      );
    }

    if (unitsLocalStorage) {
      this.store.dispatch(
        useFarenheit({
          useFarenheit: unitsLocalStorage === 'false' ? false : true,
        })
      );
    }

    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     const lat = position.coords.latitude;
    //     const long = position.coords.longitude;
    //     console.log('lat: ', lat);
    //     console.log('long: ', long);
    //   },
    //   (error) => {
    //     console.log('error');
    //   }
    // );
  }

  onDarkModeToggle(event: Event) {
    this.store.dispatch(
      DarkMode({ darkMode: (<HTMLInputElement>event.target).checked })
    );
  }

  onUnitsToggle(event: Event) {
    this.store.dispatch(
      useFarenheit({ useFarenheit: (<HTMLInputElement>event.target).checked })
    );
  }
}
