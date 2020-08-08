import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import home from './home/reducer';
import about from './about/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    home,
    about,
    form: formReducer
  });
