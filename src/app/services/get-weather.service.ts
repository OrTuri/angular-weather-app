import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IAutoComplete } from './IAutoComplete';
import { ICurrentWeather } from './ICurrentWeather';
import { I5DayForecast } from './I5DayForecast';
import { Store } from '@ngrx/store';
import {
  CurrentWeather,
  Forecase5Days,
  ErrorModal,
} from '../state/weather.actions';
import { IGetCityByCoords } from './IGetCityByCoords';

@Injectable({
  providedIn: 'root',
})
export class GetWeatherService {
  constructor(private http: HttpClient, private store: Store) {}

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

  forecast5DayMockData: I5DayForecast = {
    Headline: {
      EffectiveDate: '2024-02-14T01:00:00+02:00',
      EffectiveEpochDate: 1707865200,
      Severity: 3,
      Text: 'Expect showery weather late Tuesday night through late Wednesday night',
      Category: 'rain',
      EndDate: '2024-02-15T07:00:00+02:00',
      EndEpochDate: 1707973200,
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
    },
    DailyForecasts: [
      {
        Date: '2024-02-11T07:00:00+02:00',
        EpochDate: 1707627600,
        Temperature: {
          Minimum: {
            Value: 12.8,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 20.8,
            Unit: 'C',
            UnitType: 17,
          },
        },
        Day: {
          Icon: 3,
          IconPhrase: 'Partly sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
      },
      {
        Date: '2024-02-12T07:00:00+02:00',
        EpochDate: 1707714000,
        Temperature: {
          Minimum: {
            Value: 14.6,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 23,
            Unit: 'C',
            UnitType: 17,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 7,
          IconPhrase: 'Cloudy',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
      },
      {
        Date: '2024-02-13T07:00:00+02:00',
        EpochDate: 1707800400,
        Temperature: {
          Minimum: {
            Value: 14.3,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 24.2,
            Unit: 'C',
            UnitType: 17,
          },
        },
        Day: {
          Icon: 7,
          IconPhrase: 'Cloudy',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 39,
          IconPhrase: 'Partly cloudy w/ showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
      },
      {
        Date: '2024-02-14T07:00:00+02:00',
        EpochDate: 1707886800,
        Temperature: {
          Minimum: {
            Value: 13.4,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 19,
            Unit: 'C',
            UnitType: 17,
          },
        },
        Day: {
          Icon: 12,
          IconPhrase: 'Showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Moderate',
        },
        Night: {
          Icon: 12,
          IconPhrase: 'Showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Moderate',
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
      },
      {
        Date: '2024-02-15T07:00:00+02:00',
        EpochDate: 1707973200,
        Temperature: {
          Minimum: {
            Value: 13.2,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 19.1,
            Unit: 'C',
            UnitType: 17,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 40,
          IconPhrase: 'Mostly cloudy w/ showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
      },
    ],
  };

  getCityByCoordsMockData = {
    Version: 1,
    Key: '128713',
    Type: 'City',
    Rank: 75,
    LocalizedName: 'Al Burj',
    EnglishName: 'Al Burj',
    PrimaryPostalCode: '',
    Region: {
      ID: 'AFR',
      LocalizedName: 'Africa',
      EnglishName: 'Africa',
    },
    Country: {
      ID: 'EG',
      LocalizedName: 'Egypt',
      EnglishName: 'Egypt',
    },
    AdministrativeArea: {
      ID: 'KFS',
      LocalizedName: 'Kafr el-Sheikh',
      EnglishName: 'Kafr el-Sheikh',
      Level: 1,
      LocalizedType: 'Governorate',
      EnglishType: 'Governorate',
      CountryID: 'EG',
    },
    TimeZone: {
      Code: 'EET',
      Name: 'Africa/Cairo',
      GmtOffset: 2,
      IsDaylightSaving: false,
      NextOffsetChange: '2024-04-25T22:00:00Z',
    },
    GeoPosition: {
      Latitude: 31.586,
      Longitude: 30.983,
      Elevation: {
        Metric: {
          Value: 0,
          Unit: 'm',
          UnitType: 5,
        },
        Imperial: {
          Value: 0,
          Unit: 'ft',
          UnitType: 0,
        },
      },
    },
    IsAlias: false,
    SupplementalAdminAreas: [],
    DataSets: [
      'AirQualityCurrentConditions',
      'AirQualityForecasts',
      'DailyPollenForecast',
      'FutureRadar',
      'MinuteCast',
    ],
  };

  getAutoCompleteData(searchTerm: string): void {
    const mockData: IAutoComplete[] = [
      {
        Version: 1,
        Key: '215854',
        Type: 'City',
        Rank: 31,
        LocalizedName: 'Tel Aviv',
        Country: {
          ID: 'IL',
          LocalizedName: 'Israel',
        },
        AdministrativeArea: {
          ID: 'TA',
          LocalizedName: 'Tel Aviv',
        },
      },
    ];

    this.http
      .get<IAutoComplete[]>(
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${environment.API_KEY}&q=${searchTerm}`
      )

      .subscribe(
        (autoCompleteData) => {
          if (autoCompleteData.length < 1) {
            this.store.dispatch(
              ErrorModal({ message: 'Could not find any results!' })
            );
            return;
          }
          const cityId = autoCompleteData?.[0].Key;
          this.getCurrentWeatherData(cityId).subscribe((currentWeatherData) => {
            this.store.dispatch(
              CurrentWeather({
                currentWeather: <ICurrentWeather[]>currentWeatherData,
                cityName: autoCompleteData?.[0].LocalizedName,
                cityKey: autoCompleteData?.[0].Key,
              })
            );
          });

          this.get5DayForecast(cityId).subscribe((data5DayForecast) => {
            this.store.dispatch(Forecase5Days(data5DayForecast));
          });
        },
        (error) => {
          this.store.dispatch(
            ErrorModal({
              message:
                "The API didn't respond.\nMock data will be presented instead of real data",
            })
          );
          this.store.dispatch(
            CurrentWeather({
              currentWeather: <ICurrentWeather[]>this.currentWeatherMockData,
              cityName: mockData?.[0].LocalizedName,
              cityKey: mockData?.[0].Key,
            })
          );

          this.store.dispatch(Forecase5Days(this.forecast5DayMockData));
        }
      );
  }

  getCurrentWeatherData(cityId: string): Observable<ICurrentWeather[]> {
    return this.http.get<ICurrentWeather[]>(
      `https://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=${environment.API_KEY}`
    );
  }

  get5DayForecast(cityId: string) {
    return this.http.get<I5DayForecast>(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${environment.API_KEY}&metric=true`
    );
  }

  getCityNameByCoords(coords: [number, number]): Observable<IGetCityByCoords> {
    return this.http.get<IGetCityByCoords>(
      `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search&apikey=${environment.API_KEY}&q=${coords[0]},${coords[1]}`
    );
  }
}
