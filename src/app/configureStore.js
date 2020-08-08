import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

import createRootReducer from 'app/ducks/rootReducer';
import rootSaga from 'app/ducks/rootSaga';

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

// prettier-ignore
const composeEnhancers = (
  process.env.NODE_ENV === 'development'
  && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;


export default () => {
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return {
    store,
    history
  };
};
