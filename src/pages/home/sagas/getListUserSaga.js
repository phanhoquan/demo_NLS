import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'utils/Apis';
import { Types } from '../redux';

// worker Saga: will be fired on SEND_INVITE actions
function* getListUser() {
  try {
    /**
     * Example data
     * url: enpoint/getListUser
     * params:
     *  {
     *    username: 'Lorem'
     *    password: 'Lorem',
     *    isRemeberMe: true | false,
     *  }
     *
     */
    const response = yield call(() => API.get(ROUTES.API_LIST_USER));

    if (response.ok) {
      const { data } = response;
      // In case: getListUser request success
      yield put({
        type: Types.GET_LIST_USER_SUCCESS,
        data
      });
    } else {
      // In case: getListUser request failed
      yield put({
        type: Types.GET_LIST_USER_FAILED
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: Types.GET_LIST_USER_FAILED, error });
  }
}

/*
  Starts getListUser on each dispatched `GET_LIST_USER` action.
*/
function* getListUserSaga() {
  yield takeLatest(Types.GET_LIST_USER, getListUser);
}

export default getListUserSaga;
