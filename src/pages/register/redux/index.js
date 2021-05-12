// import libs
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Define action creators
export const { Types, Creators } = createActions({
  registerAccount: ['loginInfo'],
  registerAccountSuccess: null,
  registerAccountFailed: null
});

// Initial state
export const INITIAL_STATE = Immutable({
  userInfo: {},
  isProcessing: false
});

const registerAccount = (state, action) => {
  return state.merge({
    isProcessing: true,
    type: action.type
  });
};

const registerAccountSuccess = (state, action) => {
  return state.merge({
    isProcessing: true,
    type: action.type
  });
};
const registerAccountFailed = (state, action) => {
  return state.merge({
    isProcessing: true,
    type: action.type
  });
};

// Assign handler to types.
const HANDLERS = {
  [Types.REGISTER_ACCOUNT]: registerAccount,
  [Types.REGISTER_ACCOUNT_SUCCESS]: registerAccountSuccess,
  [Types.REGISTER_ACCOUNT_FAILED]: registerAccountFailed
};

// Create reducers by pass state and handlers
export const registerReducer = createReducer(INITIAL_STATE, HANDLERS);
