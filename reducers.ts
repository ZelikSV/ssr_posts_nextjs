import { combineReducers } from 'redux';

import { login } from './pages/login/reducer';

const reducers = {
  login,
};

export default combineReducers(reducers);
