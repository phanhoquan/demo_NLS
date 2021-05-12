import { all } from 'redux-saga/effects';

/** login */
import LoginSaga from 'pages/login/sagas/LoginSaga';
/**
 * Get list user
 */
import getListUserSaga from 'pages/home/sagas/getListUserSaga';

export default function* RootSagas() {
  yield all([
    // account sagas
    LoginSaga(),
    getListUserSaga()
  ]);
}
