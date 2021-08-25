import { LOCAL_STORAGE_TOKEN } from "../../utils/constants";
import { DATA_CLEAR } from "../actionTypes";

export const dataClearAction = () => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  return {
    type: DATA_CLEAR,
  };
};
