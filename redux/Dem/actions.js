import { TEXT_CLEAN, TEXT_STATE } from "./actionTypes";

export const text = (data,val) => ({
    type: TEXT_STATE,
    data,
    val
  });
  export const clean = () => ({
    type: TEXT_CLEAN
  });