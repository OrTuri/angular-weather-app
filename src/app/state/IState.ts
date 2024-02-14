import { ICurrentWeather } from '../services/ICurrentWeather';

export interface IState {
  cityName: string;
  cityKey: string;
  currentWeather: ICurrentWeather[];
  favorites: { cityName: string; cityKey: string }[];
  searchError?: string;
  useFarenheit: boolean;
}
