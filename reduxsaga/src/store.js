// store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import counterReducer from './features/counterSlice.js';
import { watchIncrementAsync } from './sagas/counterSaga.js';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  counter: counterReducer,
};

function* rootSaga() {
  yield all([watchIncrementAsync()]);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
