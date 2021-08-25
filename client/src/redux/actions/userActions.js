import { instance } from "../../api/axios";
import defaultAvatar from "../../img/avatar.png";
import { AUTH, EDIT, LOCAL_STORAGE_TOKEN, USER } from "../../utils/constants";
import { SET_LOADING, SET_USER } from "../actionTypes";
import { setAuthAction } from "./authActions";
import { dataClearAction } from "./commonActions";
export const setUserAction = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};
export const setLoadingAction = (flag) => {
  return {
    type: SET_LOADING,
    payload: { loading: flag },
  };
};

export const getUserAction = () => {
  return async (dispatch) => {
    dispatch(setLoadingAction(true));
    try {
      const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
      if (!token) {
        return;
      }
      const { data } = await instance(token).get(USER + AUTH);
      dispatch(setAuthAction(true));
      dispatch(setUserAction(data.user));
      if (!data.user.photo) {
        dispatch(setUserAction({ photo: defaultAvatar }));
      }
    } catch (error) {
      dispatch(dataClearAction());
    } finally {
      dispatch(setLoadingAction(false));
    }
  };
};
export const editUserAction = (form) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
      const { data } = instance(token).post(USER + EDIT, form);
    } catch (error) {}
  };
};
