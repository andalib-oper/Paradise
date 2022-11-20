import {UPDATE_FIELDS, 
    BLUR_FIELDS, 
    STATE_CLEANUP} from './actionTypes';
  
  const initialState = {
    inputValues: {
      email: 'andalib5@gmail.com',
      password: '87654321',
    },
    inputValidity: {
      email: true,
      password: true,
    },
    isTouched: {
      email: true,
      password: true,
    },
    // finalFormState: false
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_FIELDS: {
        const newInputValue = {
          ...state.inputValues,
          [action.fieldId]: action.val,
        };
        const newInputValidity = {
          ...state.inputValidity,
          [action.fieldId]: action.isValid,
        };
        return {
          ...state,
          inputValues: newInputValue,
          inputValidity: newInputValidity,
        };
      }
  
      case BLUR_FIELDS: {
        const newInputIsTouched = {...state.isTouched, [action.fieldId]: true};
        return {...state, isTouched: newInputIsTouched};
      }
  
      case STATE_CLEANUP: {
        console.log("Cleaning state");
        return initialState;
      }
      default:
        return state;
    }
  };
  
  export default loginReducer;
  