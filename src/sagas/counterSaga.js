import { all, delay, put, takeEvery } from 'redux-saga/effects';
import { creators, actions } from '~/modules/counter';

function* incrementAsync({payload}) {
  yield delay(payload.delay);
  yield put(actions.increment(payload.number));
}

function* watchIncrementAsync() {
  yield takeEvery(creators.INCREMENT_ASYNC, incrementAsync);
}

export default function* counterSaga() {
  yield all([watchIncrementAsync()]);
}
