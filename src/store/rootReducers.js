import { combineReducers } from 'redux';
import { registerReducer } from 'registerAccount/redux';
import { homeReducer } from 'home/redux';
import { accountReducer } from 'loginAccount/redux';

const appReducer = combineReducers({
  accountReducer,
  registerReducer,
  homeReducer
});

export default appReducer;
