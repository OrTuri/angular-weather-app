import { Component } from '@angular/core';
import { WeatherDayCardComponent } from '../weather-day-card/weather-day-card.component';

@Component({
  selector: 'weather-details',
  standalone: true,
  imports: [WeatherDayCardComponent],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss',
})
export class WeatherDetailsComponent {}
