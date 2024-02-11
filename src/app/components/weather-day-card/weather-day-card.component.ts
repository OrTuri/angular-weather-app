import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-day-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-day-card.component.html',
  styleUrl: './weather-day-card.component.scss',
})
export class WeatherDayCardComponent {
  @Input() day: string = 'Sun';
  @Input() temp: number = 24.3;
}
