import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// reducers
import reducer from './reducers'

// sagas
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas);

export default store;
