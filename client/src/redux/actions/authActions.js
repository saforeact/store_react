import { instance } from "../../api/axios";
import {
  API,
  AUTH,
  LOCAL_STORAGE_TOKEN,
  LOGIN,
  REGISTER,
} from "../../utils/constants";
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
      const { data } = await instance().post(API + AUTH + LOGIN, form);
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
      const { data } = await instance().post(API + AUTH + REGISTER, form);
      const { token } = data;
      localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
      dispatch(getUserAction());
    } catch (error) {
      dispatch(setAuthAction(false));
      dispatch(dataClearAction());
    }
  };
};
