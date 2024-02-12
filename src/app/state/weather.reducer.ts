import { createReducer, on } from '@ngrx/store';
import {
  AddRemoveFavorite,
  CurrentWeather,
  Forecase5Days,
  LoadFavorites,
  SearchError,
} from './weather.actions';

export const initialState: any = {};

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
  })
);
