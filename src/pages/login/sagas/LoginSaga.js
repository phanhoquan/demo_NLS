import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'utils/Apis';
import { Types } from '../redux';

// worker Saga: will be fired on SEND_INVITE actions
function* login(action) {
  const { username, password, isChecked } = action.loginInfo;
  try {
    /**
     * Example data
     * url: enpoint/login
     * params:
     *  {
     *    username: 'Lorem'
     *    password: 'Lorem',
     *    isRemeberMe: true | false,
     *  }
     *
     */
    const response = yield call(() =>
      API.post(ROUTES.LOGIN, { username, password })
    );

    if (response.ok) {
      const { data } = response;
      // In case: Login request success
      yield put({
        type: Types.SIGN_IN_SUCCESS,
        data: { token: data.token, isChecked }
      });
    } else {
      // In case: Login request failed
      yield put({
        type: Types.SIGN_IN_FAILED
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: Types.SIGN_IN_FAILED, error });
  }
}

/*
  Starts login on each dispatched `SIGN_IN` action.
*/
function* loginSaga() {
  yield takeLatest(Types.SIGN_IN, login);
}

export default loginSaga;
