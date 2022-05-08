import { all, fork } from 'redux-saga/effects';

import { watchUsersData } from './pages/login/saga';

export function* saga() {
  yield all([fork(watchUsersData)]);
}
