import { Action, combineReducers } from 'redux';

import { AppState } from '@@/init/store/types';

export const combinedReducer = combineReducers({
  noop: (state = {}) => state,
});

/* https://stackoverflow.com/a/35641992 */
export const rootReducer = (state: AppState, action: Action) => {
  if (action.type === 'RESET_STORE') {
    return combinedReducer(undefined, action);
  }

  combinedReducer(state, action);
};
