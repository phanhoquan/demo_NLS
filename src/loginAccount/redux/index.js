// import libs
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Define action creators
export const { Types, Creators } = createActions({
  signIn: ['loginInfo'],
  signInSuccess: null,
  signInFailed: null,
  logOut: null
});

// Initial state
export const INITIAL_STATE = Immutable({
  isProcessing: false,
  type: '',
  token: '',
  isCheckedBox: false
});

const signIn = (state, action) => {
  return state.merge({
    isProcessing: true,
    type: action.type,
    errors: ''
  });
};

const signInSuccess = (state, action) => {
  const { data } = action;
  return state.merge({
    isProcessing: false,
    type: action.type,
    token: data && data.token,
    isCheckedBox: data && data.isChecked
  });
};

const signInFailed = (state, action) => {
  return state.merge({
    isProcessing: false,
    type: action.type
  });
};

const logOut = state => {
  return state.merge({
    ...INITIAL_STATE,
    token: ''
  });
};

// Assign handler to types.
const HANDLERS = {
  [Types.SIGN_IN]: signIn,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILED]: signInFailed,
  [Types.LOG_OUT]: logOut
};

// Create reducers by pass state and handlers
export const accountReducer = createReducer(INITIAL_STATE, HANDLERS);
