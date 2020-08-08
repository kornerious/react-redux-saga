import { constants, actions } from 'ducks-helpers';

//  SUFFIXES
// [
//   'LOADING',
//   'PENDING',
//   'SUCCESS',
//   'ERROR',
//   'FAILED',
//   'CANCELED'
// ]

export const TYPE = constants('home', ['~FETCH_DATA', 'TOGGLE_TEXT']);

export const ACTION = actions(TYPE);
