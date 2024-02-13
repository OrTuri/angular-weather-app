import { createReducer, on } from '@ngrx/store';
import {
  AddRemoveFavorite,
  CurrentWeather,
  DarkMode,
  Forecase5Days,
  LoadFavorites,
  SearchError,
  useFarenheit,
} from './weather.actions';
import { IState } from './IState';

export const initialState: IState = { searchError: false } as IState;

export const weatherReducer = createReducer(
  initialState,
  on(CurrentWeather, (state, payload) => {
    return { ...state, ...payload };
  }),
  on(Forecase5Days, (state, payload) => {
    return { ...state, ...payload };
  }),
  on(LoadFavorites, (state) => {
    const favoritesLocalStorage = localStorage.getItem('favorites');
    let favoritesArr;
    if (favoritesLocalStorage) {
      favoritesArr = JSON.parse(favoritesLocalStorage);
    } else {
      favoritesArr = [];
    }

    return { ...state, favorites: favoritesArr };
  }),
  on(AddRemoveFavorite, (state, payload) => {
    let favoritesArr = [...state.favorites];

    if (favoritesArr.find((obj) => obj.cityKey === payload.cityKey)) {
      favoritesArr = favoritesArr.filter(
        (obj) => obj.cityKey !== payload.cityKey
      );
    } else {
      favoritesArr.unshift({
        cityKey: payload.cityKey,
        cityName: payload.cityName,
      });
    }

    localStorage.setItem('favorites', JSON.stringify(favoritesArr));

    return { ...state, favorites: favoritesArr };
  }),
  on(SearchError, (state) => {
    return { ...state, searchError: state.searchError ? false : true };
  }),
  on(DarkMode, (state, payload) => {
    localStorage.setItem('darkMode', payload.darkMode ? 'true' : 'false');
    return { ...state, darkMode: payload.darkMode };
  }),
  on(useFarenheit, (state, payload) => {
    localStorage.setItem('units', payload.useFarenheit ? 'true' : 'false');
    return { ...state, useFarenheit: payload.useFarenheit };
  })
);
