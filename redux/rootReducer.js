import {combineReducers} from 'redux';
import authReducer from './auth/reducer';
import loginReducer from './Login/reducers'

const rootReducer = combineReducers({
  authState: authReducer,
  loginFormState: loginReducer,
});

export default rootReducer;