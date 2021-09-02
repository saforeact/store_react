import { deviceAPI } from "../../api/httpService";
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
      const { data } = await deviceAPI.getAllDevices();
      dispatch(setDevicesAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};

export const getOneDevicesAction = (idDevice) => {
  return async (dispatch) => {
    try {
      const { data } = await deviceAPI.getOneDevices(idDevice);
      dispatch(setDevicesAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};

export const getDevicesAfterSearchAction = (props) => {
  return async (dispatch) => {
    try {
      const { data } = await deviceAPI.getDevicesAfterSearch(props);
      dispatch(setDevicesAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};

export const getAllBrands = (search) => {
  return async (dispatch) => {
    try {
      const { data } = await deviceAPI.getAllBrands(search);
      dispatch(setDevicesAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};

export const getAllCategory = (search = "") => {
  return async (dispatch) => {
    try {
      const { data } = await deviceAPI.getAllCategory(search);
      dispatch(setDevicesAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
