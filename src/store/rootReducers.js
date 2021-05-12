import { combineReducers } from 'redux';
import { registerReducer } from 'pages/register/redux';
import { homeReducer } from 'pages/home/redux';
import { accountReducer } from 'pages/login/redux';

const appReducer = combineReducers({
  accountReducer,
  registerReducer,
  homeReducer
});

export default appReducer;
