import * as types from '../actions';
import { ActionType, LoginState } from '../../../types';

const loginState = {
  name: '',
  password: '',
};

// eslint-disable-next-line default-param-last
export const login = (state: LoginState = loginState, { type, payload }: ActionType) => {
  switch (type) {
    case types.SET_USER_DATA.SUCCESS:
    case types.SET_USER_DATA.FAILURE:
      return { ...state, ...payload };
    case types.GET_USER_NAME.FAILURE:
    case types.GET_USER_NAME.SUCCESS:
      return { ...state, name: payload };
    default:
      return state;
  }
};
