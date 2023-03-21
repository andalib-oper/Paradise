import {combineReducers} from 'redux';
import authReducer from './auth/reducer';
import loginReducer from './Login/reducers'
import emailReducer from './emailConfirm/reducer'
import regReducer from './register/reducer';
import demReducer from './Dem/reducer';

const rootReducer = combineReducers({
  authState: authReducer,
  loginFormState: loginReducer,
  emailFormState: emailReducer,
  registerFormState: regReducer,
  demState:demReducer
});

export default rootReducer;