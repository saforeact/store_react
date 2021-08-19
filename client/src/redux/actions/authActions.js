import { LOCAL_STORAGE_TOKEN } from "../../utils/constants";
import { instance } from "../../api/axios";

export const signInAction = (form) => {
  return async (dispatch) => {
    const { data } = await instance().post("/api/auth/login", form);
    const { token } = data;
    localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
    try {
    } catch (error) {}
  };
};
export const signUpAction = (form) => {
  return async (dispatch) => {
    try {
      const { data } = await instance().post("/api/auth/registration", form);
      const { token } = data;
      localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
    } catch (error) {}
  };
};
