import { CreateRequestTypes } from '../types';

export function createRequestTypes<ActionType extends string>(type: ActionType): CreateRequestTypes<ActionType> {
  const FAILURE = `${type}_FAILURE` as const;
  const REQUEST = `${type}_REQUEST` as const;
  const SUCCESS = `${type}_SUCCESS` as const;

  return {
    FAILURE,
    REQUEST,
    SUCCESS,
    TYPE: type,
    failureAction: { type: FAILURE },
    requestAction: { type: REQUEST },
    successAction: { type: SUCCESS },
  };
}
