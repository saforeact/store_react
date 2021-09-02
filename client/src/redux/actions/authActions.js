import { authAPI } from "../../api/httpService";
import { LOCAL_STORAGE_TOKEN } from "../../utils/constants";
import { SET_AUTH } from "../actionTypes";
import { dataClearAction } from "./commonActions";
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
      const { data } = await authAPI.signIn(form);
      const { token } = data;
      localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
      dispatch(getUserAction());
    } catch (error) {
      dispatch(setAuthAction(false));
      dispatch(dataClearAction());
    }
  };
};
export const signUpAction = (form) => {
  return async (dispatch) => {
    try {
      const { data } = await authAPI.signUp(form);
      const { token } = data;
      localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
      dispatch(getUserAction());
    } catch (error) {
      dispatch(setAuthAction(false));
      dispatch(dataClearAction());
    }
  };
};
