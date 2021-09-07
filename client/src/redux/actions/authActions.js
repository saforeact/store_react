import { authAPI } from "../../api/httpService";
import { SET_AUTH } from "../actionTypes";
import { checkErrors } from "./commonActions";
import { getUserAction } from "./userActions";

export const setAuthAction = (flag) => {
  return {
    type: SET_AUTH,
    payload: { isAuth: flag },
  };
};
export const signInAction = (form) => {
  return async (dispatch) => {
    try {
      await authAPI.signIn(form);
      dispatch(getUserAction());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
export const signUpAction = (form) => {
  return async (dispatch) => {
    try {
      await authAPI.signUp(form);
      dispatch(getUserAction());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
