import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'weather-day-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-day-card.component.html',
  styleUrl: './weather-day-card.component.scss',
})
export class WeatherDayCardComponent implements OnChanges {
  @Input() day: string = 'Sun';
  @Input() maxTemp: number = 0;
  @Input() minTemp: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.day = new Date(this.day).toLocaleString('en-us', { weekday: 'short' });
  }
}
