import { all } from 'redux-saga/effects';

/** login */
import LoginSaga from 'loginAccount/sagas/LoginSaga';
/**
 * Get list user
 */
import getListUserSaga from 'home/sagas/getListUserSaga';

export default function* RootSagas() {
  yield all([
    // account sagas
    LoginSaga(),
    getListUserSaga()
  ]);
}
