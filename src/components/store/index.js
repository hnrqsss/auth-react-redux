import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers/index'

import createSagaMiddleware from 'redux-saga'
import root from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

export default store

sagaMiddleware.run(root)