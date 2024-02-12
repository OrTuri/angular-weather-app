import { Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AppComponent } from './app.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

export const routes: Routes = [
  { path: 'favorites', component: FavoritesComponent },
  { path: '', component: WeatherDetailsComponent },
];
