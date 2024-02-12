import { Component } from '@angular/core';
import { GetWeatherService } from '../../services/get-weather.service';

@Component({
  selector: 'search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  constructor(private weatherSerivce: GetWeatherService) {}

  onSearch(searchInput: HTMLInputElement) {
    this.weatherSerivce.getAutoCompleteData(searchInput.value);
  }
}
