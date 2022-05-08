import { createRequestTypes } from '../../../helpers';

export const SET_USER_DATA = createRequestTypes('SET_USER_DATA');
export const GET_USER_NAME = createRequestTypes('GET_USER_NAME');

export const LoginActions = {
  setUserData: (userData: { name: string; password: string }) => ({ type: SET_USER_DATA.REQUEST, payload: userData }),
  getUserName: () => ({ type: GET_USER_NAME.REQUEST }),
};
