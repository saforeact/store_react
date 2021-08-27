import { instance } from "../../api/axios";
import {
  ADMIN,
  API,
  DELETE_USERS,
  GET_ALL_USERS,
  LOCAL_STORAGE_TOKEN,
  SET_NEW_USERS,
} from "../../utils/constants";
import { SET_USERS } from "../actionTypes";

export const getUsersAction = (payload) => {
  return {
    type: SET_USERS,
    payload,
  };
};

export const getAllUsersAction = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
      const { data } = await instance(token).get(API + ADMIN + GET_ALL_USERS);
      dispatch(getUsersAction(data));
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
