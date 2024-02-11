import { createReducer, on } from '@ngrx/store';
import { getAutoCompleteData, Increment, Decrement } from './weather.actions';

export const initialState = 50;

export const weatherReducer = createReducer(
  initialState,
  on(Increment, (state) => state + 1),
  on(Decrement, (state) => state - 1)
);
