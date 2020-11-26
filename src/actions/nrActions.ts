import { DECREASE, INCREASE, NrDispatchTypes } from "./nrActionsTypes";
import { Dispatch } from "redux";

export const increase = () => async (dispatch: Dispatch<NrDispatchTypes>) => {
  try {
    setTimeout(() => {
      dispatch({
        type: INCREASE,
        payload: 1,
      });
    }, 3000);
  } catch (e) {
    console.log(e);
  }
};

export const decrease = () => async (dispatch: Dispatch<NrDispatchTypes>) => {
  try {
    dispatch({
      type: DECREASE,
      payload: 1,
    });
  } catch (e) {
    console.log(e);
  }
};
