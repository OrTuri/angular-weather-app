import { Component } from '@angular/core';
import { GetWeatherService } from '../../services/get-weather.service';
import { Store } from '@ngrx/store';
import { IState } from '../../state/IState';
import { ErrorModal } from '../../state/weather.actions';

@Component({
  selector: 'search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  constructor(
    private weatherSerivce: GetWeatherService,
    private store: Store<{ weather: IState }>
  ) {}

  onSearch(searchInput: HTMLInputElement) {
    const searchTerm = searchInput.value;

    if (!searchTerm.trim()) return;

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

    const isValid = searchTerm
      .toLowerCase()
      .split('')
      .every((letter) => {
        if (letter === ' ') return true;
        return alphabetArray.includes(letter);
      });

    if (!isValid) {
      this.store.dispatch(
        ErrorModal({ message: 'Please enter English letters only!' })
      );
      return;
    }

    this.weatherSerivce.getAutoCompleteData(searchInput.value);
  }
}
