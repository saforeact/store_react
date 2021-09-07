import { userAPI } from "../../api/httpService";
import { SET_LOADING, SET_USER } from "../actionTypes";
import { setAuthAction } from "./authActions";
import { getBasketAction } from "./basketActions";
import { checkErrors } from "./commonActions";
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
      const { data } = await userAPI.getUser();

      dispatch(setAuthAction(true));
      dispatch(
        setUserAction({
          ...data.user,
          photo: `${process.env.REACT_APP_URL_SERVER}/${data.user.photo}`,
        })
      );
      dispatch(getBasketAction());
    } catch (error) {
      dispatch(checkErrors(error));
    } finally {
      dispatch(setLoadingAction(false));
    }
  };
};
export const editUserAction = (form) => {
  return async (dispatch) => {
    try {
      await userAPI.editUser(form);
      dispatch(getUserAction());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};

export const editUserPhotoAction = (photo) => {
  return async (dispatch) => {
    try {
      await userAPI.editPhotoUser(photo);
      dispatch(getUserAction());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
