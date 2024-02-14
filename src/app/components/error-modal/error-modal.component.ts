import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ErrorModal } from '../../state/weather.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'error-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.scss',
})
export class ErrorModalComponent implements OnInit {
  constructor(private store: Store<{ weather: any }>) {}

  darkMode: boolean = false;
  errorMessage: string = '';

  ngOnInit(): void {
    this.store.select('weather').subscribe((state) => {
      this.darkMode = state.darkMode;
      this.errorMessage = state.searchError;
    });
  }

  closeModal() {
    this.store.dispatch(ErrorModal({ message: '' }));
  }
}
