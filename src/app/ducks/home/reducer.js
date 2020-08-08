import { handleActions } from 'redux-actions';
import { createReducer } from '@reduxjs/toolkit';
import { TYPE } from './actions';

const initialState = {
  data: null,
  fetching: false
};

const reducer = createReducer(initialState, {
    [TYPE.FETCH_DATA_LOADING]: (state, action) => ({
      ...state,
      fetching: true
    }),
    [TYPE.FETCH_DATA_SUCCESS]: (state, action) => {
      return {
        ...state,
        data: JSON.stringify(action.payload),
        fetching: false
      };
    },
    [TYPE.FETCH_DATA_ERROR]: (state, action) => state
  }
);

export default reducer;
