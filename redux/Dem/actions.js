import { TEXT_STATE } from "./actionTypes";

export const text = (data,val) => ({
    type: TEXT_STATE,
    data,
    val
  });