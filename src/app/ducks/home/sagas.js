import { put, call, takeEvery } from 'redux-saga/effects';
import { get } from 'app/api';

import { TYPE, ACTION } from './actions';

function* fetchData(action) {
  try {
    yield put(ACTION.fetchDataLoading());

    const res = yield call(get, 'api/users/uaa/credentials/current');

    yield put(ACTION.fetchDataSuccess(res.data));
  } catch (err) {
    yield put(ACTION.fetchDataError(err));
  }
}

export default [
  takeEvery(TYPE.FETCH_DATA, fetchData),
];
