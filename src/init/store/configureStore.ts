import { applyMiddleware, createStore, Middleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

const { composeWithDevTools } =
  process.env.NODE_ENV === 'production' &&
  process.env.REACT_APP_ENABLE_REDUX_DEVTOOLS_IN_PROD === 'true'
    ? require('redux-devtools-extension/logOnly')
    : require('redux-devtools-extension/developmentOnly');

/* https://redux.js.org/usage/configuring-your-store#integrating-the-devtools-extension */
const middlewares: Middleware[] = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

/* allow undefined to reset all state */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const store = createStore(rootReducer, composedEnhancers);
