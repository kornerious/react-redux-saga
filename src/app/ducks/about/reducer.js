import { handleActions } from 'redux-actions';
import { createReducer } from '@reduxjs/toolkit';
import { TYPE } from './actions';

const initialState = {
};

const reducer = createReducer(initialState, {
    [TYPE.FETCH_DATA]: (state, action) => state,
    [TYPE.FETCH_DATA_SUCCES]: (state, action) => state,
    [TYPE.FETCH_DATA_ERROR]: (state, action) => state,
    [TYPE.TOGGLE_TEXT]: (state, action) => state
  },
);

export default reducer;
