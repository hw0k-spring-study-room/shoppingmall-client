import { all } from 'redux-saga/effects';

import counterSaga from './counterSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([counterSaga(), userSaga()]);
}
