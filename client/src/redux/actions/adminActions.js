import { instance } from "../../api/axios";
import {
  ADD_PHOTO_TO_PROD,
  ADMIN,
  API,
  BRAND,
  CREATE_PRODUCT,
  DELETE_USERS,
  GET_ALL_USERS,
  LOCAL_STORAGE_TOKEN,
  SET_NEW_USERS,
  TYPE,
} from "../../utils/constants";
import { SET_DATA } from "../actionTypes";
import { checkErrors } from "./commonActions";

export const setDataAction = (payload) => {
  return {
    type: SET_DATA,
    payload,
  };
};

export const getAllUsersAction = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
      const { data } = await instance(token).get(API + ADMIN + GET_ALL_USERS);
      dispatch(setDataAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};

export const setNewUsersAction = (userList, removeList) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

      await instance(token).post(API + ADMIN + DELETE_USERS, {
        removeList,
      });

      await instance(token).post(API + ADMIN + SET_NEW_USERS, {
        userList,
      });

      dispatch(getAllUsersAction());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};

export const getAllBrands = (search = "", cancelToken = "") => {
  return async (dispatch) => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    try {
      const { data } = await instance(token).get(
        search.length ? API + BRAND + `?search=${search}` : API + BRAND,
        {
          cancelToken: cancelToken ? cancelToken.token : "",
        }
      );
      dispatch(setDataAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};

export const getAllCategory = (search = "", cancelToken) => {
  return async (dispatch) => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    try {
      const { data } = await instance(token).get(
        search.length ? API + TYPE + `?search=${search}` : API + TYPE,

        {
          cancelToken: cancelToken ? cancelToken.token : "",
        }
      );
      dispatch(setDataAction(data));
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
export const createProductAction = (product, photos) => {
  return async (dispatch) => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    try {
      const { data } = await instance(token).post(
        API + ADMIN + CREATE_PRODUCT,
        {
          product,
        }
      );
      const { _idProd } = data;

      const resPhoto = new FormData();
      [...photos].map((item, idx) => resPhoto.append(`photo ${idx}`, item));

      await instance(token).post(
        API + ADMIN + ADD_PHOTO_TO_PROD + `?_idProd=${_idProd}`,
        resPhoto
      );
      dispatch(getAllBrands());
      dispatch(getAllCategory());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
