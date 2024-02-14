import { createAction, props } from '@ngrx/store';
import { ICurrentWeather } from '../services/ICurrentWeather';
import { I5DayForecast } from '../services/I5DayForecast';

export const CurrentWeather = createAction(
  'CurrentWeather',
  props<{
    currentWeather: ICurrentWeather[];
    cityName: string;
    cityKey: string;
  }>()
);

export const Forecase5Days = createAction(
  'Forecase5Days',
  props<I5DayForecast>()
);

export const LoadFavorites = createAction('loadFavorites');

export const AddRemoveFavorite = createAction(
  'AddRemoveFavorite',
  props<{ cityKey: string; cityName: string }>()
);

export const ErrorModal = createAction(
  'SearchError',
  props<{ message: string }>()
);

export const DarkMode = createAction(
  'DarkMode',
  props<{ darkMode: boolean }>()
);

export const useFarenheit = createAction(
  'useFarenheit',
  props<{ useFarenheit: boolean }>()
);
