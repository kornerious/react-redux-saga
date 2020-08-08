import { handleActions } from 'redux-actions';

import { TYPE } from './actions';

const reducer = handleActions(
  {
    [TYPE.FETCH_DATA]: (state, action) => state,
    [TYPE.FETCH_DATA_SUCCES]: (state, action) => state,
    [TYPE.FETCH_DATA_ERROR]: (state, action) => state,
    [TYPE.TOGGLE_TEXT]: (state, action) => state
  },
  {}
);

export default reducer;
