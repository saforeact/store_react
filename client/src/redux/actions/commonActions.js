import { LOCAL_STORAGE_TOKEN } from "../../utils/constants";
import { DATA_CLEAR } from "../actionTypes";
import { setAuthAction } from "./authActions";

export const dataClearAction = () => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  return {
    type: DATA_CLEAR,
  };
};

export const checkErrors = (error) => {
  return async (dispatch) => {
    if (error && error.response) {
      const { response } = error;
      const { status } = response;
      console.log(`status`, status);
      if (status === 412 || 401) {
        dispatch(setAuthAction(false));
        dispatch(dataClearAction());
      }
    }
  };
};
