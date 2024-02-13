import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'weather-day-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-day-card.component.html',
  styleUrl: './weather-day-card.component.scss',
})
export class WeatherDayCardComponent implements OnChanges, OnInit {
  @Input() day: string = 'Sun';
  @Input() maxTemp: number = 0;
  @Input() minTemp: number = 0;
  @Input() icon: number = 0;
  darkMode: boolean = false;
  useF: boolean = false;

  constructor(private store: Store<{ weather: any }>) {}

  ngOnInit(): void {
    this.store.select('weather').subscribe((state) => {
      this.darkMode = state.darkMode;
      this.useF = state.useFarenheit;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.day = new Date(this.day).toLocaleString('en-us', { weekday: 'short' });
  }
}
