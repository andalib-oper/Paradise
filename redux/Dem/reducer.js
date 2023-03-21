import { TEXT_STATE } from "./actionTypes";

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
    default:
        return state;
  }
};

export default demReducer
