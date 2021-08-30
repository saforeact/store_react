import { instance } from "../../api/axios";
import { API, DEVICES } from "../../utils/constants";
import { SET_DEVICES } from "../actionTypes";
import { checkErrors } from "./commonActions";

export const setDevicesAction = (payload) => {
  return {
    type: SET_DEVICES,
    payload,
  };
};

export const getAllDevicesAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await instance().get(API + DEVICES);
      dispatch(setDevicesAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
export const getOneDevicesAction = (idDevice) => {
  console.log(`idDevice`, idDevice);
  return async (dispatch) => {
    try {
      const { data } = await instance().get(
        API + DEVICES + `/?idDevice=${idDevice}`
      );
      dispatch(setDevicesAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
export const getDevicesAfterSearchAction = (search = "") => {
  return async (dispatch) => {
    console.log(`search`, search);
    try {
      const { data } = await instance().get(
        API + DEVICES + `?search=${search}`
      );
      dispatch(setDevicesAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
