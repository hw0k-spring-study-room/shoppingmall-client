import { all, put, call, takeEvery } from 'redux-saga/effects';
import { creators, actions } from '~/modules/user';

import { fetchUserByLogin } from '~/services/userService';

function* login({payload}) {
  try {
    const user = yield call(fetchUserByLogin, {
      account: payload.account,
      password: payload.password
    });
    yield put(actions.loginSuccess(user));
  }
  catch (err) {
    console.error(err);
    yield put(actions.loginReject());
  }
}

function* watchLoginAttempt() {
  yield takeEvery(creators.LOGIN_ATTEMPT, login);
}

export default function* userSaga() {
  yield all([watchLoginAttempt()]);
}
