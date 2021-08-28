import axios from "axios";
import { instance } from "../../api/axios";
import {
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
      console.log(`error`, error);
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
      console.log(`error`, error);
    }
  };
};

export const getAllBrands = (search = "", cancelToken = "") => {
  return async (dispatch) => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    try {
      console.log(`cancelToken`, cancelToken);

      const { data } = await instance(token).get(
        API + BRAND + `?search=${search}`,
        {
          cancelToken: cancelToken.token,
        }
      );
      console.log(`data`, data);
      dispatch(setDataAction(data));
    } catch (error) {
      console.log(`error`, error);
    }
  };
};

export const getAllCategory = (search, cancelToken) => {
  return async (dispatch) => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    try {
      const { data } = await instance(token).get(
        API + TYPE + `?search=${search}`,
        {
          cancelToken: cancelToken.token,
        }
      );
      dispatch(setDataAction(data));
    } catch (error) {
      console.log(`error`, error);
    }
  };
};
export const createProductAction = (product, photos) => {
  return async (dispatch) => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    try {
      await instance(token).post(API + ADMIN + CREATE_PRODUCT, {
        product,
      });

      dispatch(getAllBrands());
      dispatch(getAllCategory());
    } catch (error) {
      console.log(`error`, error);
    }
  };
};
