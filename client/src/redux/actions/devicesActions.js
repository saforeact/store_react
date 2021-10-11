import { deviceAPI } from "../../api/httpService";
import { SET_DEVICES, SET_DEVICE_LOADING } from "../actionTypes";
import { checkErrors } from "./commonActions";

export const setDevicesAction = (payload) => {
  return {
    type: SET_DEVICES,
    payload,
  };
};
export const setDeviceLoading = (payload) => {
  return {
    type: SET_DEVICE_LOADING,
    payload: { loading: payload },
  };
};

export const getAllDevicesAction = () => {
  return async (dispatch) => {
    try {
      dispatch(setDeviceLoading(true));
      const { data } = await deviceAPI.getAllDevices();
      dispatch(setDevicesAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    } finally {
      dispatch(setDeviceLoading(false));
    }
  };
};

export const getOneDevicesAction = (idDevice) => {
  return async (dispatch) => {
    dispatch(setDeviceLoading(true));
    try {
      const { data } = await deviceAPI.getOneDevices(idDevice);
      dispatch(setDevicesAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    } finally {
      dispatch(setDeviceLoading(false));
    }
  };
};

export const getDevicesAfterSearchAction = (props) => {
  return async (dispatch) => {
    dispatch(setDeviceLoading(true));
    try {
      const { data } = await deviceAPI.getDevicesAfterSearch(props);
      dispatch(setDevicesAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    } finally {
      dispatch(setDeviceLoading(false));
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
