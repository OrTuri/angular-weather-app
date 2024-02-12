import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchError } from '../../state/weather.actions';

@Component({
  selector: 'error-modal',
  standalone: true,
  imports: [],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.scss',
})
export class ErrorModalComponent {
  constructor(private store: Store<{ weather: any }>) {}
  closeModal() {
    this.store.dispatch(SearchError());
  }
}
