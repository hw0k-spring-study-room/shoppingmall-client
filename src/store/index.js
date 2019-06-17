import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createRootReducer from '~/modules';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '~/sagas';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
