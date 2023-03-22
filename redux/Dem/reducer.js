import { TEXT_CLEAN, TEXT_STATE } from "./actionTypes";

const initialState = {
  inputVal:{
    name:'',
    num:''
  }
};

const demReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_STATE:{
        const newInputValue = {
            ...state.inputVal,
            [action.data]: action.val,
          };
          return {
            ...state,
            inputVal: newInputValue,
          };
    }
    case TEXT_CLEAN:{
      console.log("cleaning state")
      return initialState
    }
    default:
        return state;
  }
};

export default demReducer
