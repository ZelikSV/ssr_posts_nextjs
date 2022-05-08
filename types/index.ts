import { Action } from 'redux';

export type IAppStore = Record<string, any>;

export type LoginState = {
  name: string;
  password: string;
};

export interface ActionType<T = string, K = any> {
  type: T;
  payload: K;
}

export interface CreateRequestTypes<ActionType extends string> {
  FAILURE: `${ActionType}_FAILURE`;
  REQUEST: `${ActionType}_REQUEST`;
  SUCCESS: `${ActionType}_SUCCESS`;
  TYPE: ActionType;
  failureAction: Action<string>;
  requestAction: Action<string>;
  successAction: Action<string>;
}
