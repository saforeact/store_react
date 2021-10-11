import { history } from "../..";
import { commonAPI } from "../../api/httpService";
import { shopPage } from "../../utils/constants";
import { DATA_CLEAR } from "../actionTypes";
import { setAuthAction } from "./authActions";

export const dataClearAction = () => ({
  type: DATA_CLEAR,
});

export const checkErrors = (error) => {
  return async (dispatch) => {
    if (error && error.response && error.response.status) {
      const { response } = error;
      const { status } = response;
      console.log(`status`, status);
      if (status === 412 || status === 401) {
        dispatch(setAuthAction(false));
        dispatch(dataClearAction());
        history.push(shopPage);
      }
    }
  };
};
export const logoutAction = () => {
  return async (dispatch) => {
    try {
      await commonAPI.logout();
    } catch (error) {}
  };
};
