// import libs
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Define action creators
export const { Types, Creators } = createActions({
  getListUser: null,
  getListUserSuccess: null,
  getListUserFailed: null
});

// Initial state
export const INITIAL_STATE = Immutable({
  isProcessing: false,
  listAccountManagement: []
});

const getListUser = (state, action) => {
  return state.merge({
    isProcessing: true,
    type: action.type
  });
};

const getListUserSuccess = (state, action) => {
  const { data } = action;
  return state.merge({
    isProcessing: false,
    type: action.type,
    listAccountManagement: data
  });
};

const getListUserFailed = (state, action) => {
  return state.merge({
    isProcessing: false,
    type: action.type
  });
};

// Assign handler to types.
const HANDLERS = {
  [Types.GET_LIST_USER]: getListUser,
  [Types.GET_LIST_USER_SUCCESS]: getListUserSuccess,
  [Types.GET_LIST_USER_FAILED]: getListUserFailed
};

// Create reducers by pass state and handlers
export const homeReducer = createReducer(INITIAL_STATE, HANDLERS);
