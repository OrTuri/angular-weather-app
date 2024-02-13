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
    const searchTerm = searchInput.value;

    if (!searchTerm) return;

    const alphabetArray = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];

    const isValid = searchTerm.split('').every((letter) => {
      if (letter === ' ') return true;
      return alphabetArray.includes(letter);
    });

    if (!isValid) return;

    this.weatherSerivce.getAutoCompleteData(searchInput.value);
  }
}
