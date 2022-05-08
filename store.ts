import { useMemo } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';

import reducers from './reducers';
import { IAppStore } from './types';
import { saga } from './sagas';

let store: IAppStore | undefined;

function initStore(initialState: IAppStore) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(saga);

  return store;
}

export const initializeStore = (preloadedState: IAppStore) => {
  // eslint-disable-next-line no-underscore-dangle
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') {
    return _store;
  }

  // Create the store once in the client
  if (!store) {
    store = _store;
  }

  return _store;
};

export function useStore(initialState: IAppStore) {
  return useMemo<IAppStore>(() => initializeStore(initialState), [initialState]);
}
