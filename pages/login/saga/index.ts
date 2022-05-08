import { all, put, takeEvery } from 'redux-saga/effects';

import { api } from '../../api/storage';
import { GET_USER_NAME, SET_USER_DATA } from '../actions';
import { ActionType } from '../../../types';

function* setUserDataWorker(userData: ActionType<typeof SET_USER_DATA.REQUEST, { name: string; password: string }>) {
  try {
    const { payload } = userData;

    api.setUserData(payload);

    yield put({ type: SET_USER_DATA.SUCCESS, payload });
  } catch (error) {
    yield put({ type: SET_USER_DATA.FAILURE, payload: userData });
  }
}

function* getUserNameWorker() {
  try {
    const data = api.getName;

    yield put({ type: GET_USER_NAME.SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: GET_USER_NAME.FAILURE, payload: null });
  }
}

export function* watchUsersData() {
  yield all([takeEvery(SET_USER_DATA.REQUEST, setUserDataWorker), takeEvery(GET_USER_NAME.REQUEST, getUserNameWorker)]);
}
