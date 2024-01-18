// counterSaga.js
import { takeEvery, put, delay } from 'redux-saga/effects';
import { incrementAsync, increment } from '../features/counterSlice.js';

function* handleIncrementAsync() {
  yield delay(1000); // Simulating an asynchronous operation
  yield put(increment());
}

export function* watchIncrementAsync() {
  yield takeEvery(incrementAsync.type, handleIncrementAsync);
}
