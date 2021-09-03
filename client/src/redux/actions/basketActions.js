import { basketAPI } from "../../api/httpService";
import { SET_BASKET_DATA } from "../actionTypes";
import { checkErrors } from "./commonActions";

const setBasketData = (payload) => ({
  type: SET_BASKET_DATA,
  payload,
});
export const getBasketAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await basketAPI.getBasket();
      dispatch(setBasketData(data));
    } catch (error) {
      dispatch(checkErrors());
    }
  };
};
export const addDeviceToBasketBasketAction = (idProduct, counter) => {
  return async (dispatch) => {
    try {
      await basketAPI.addDeviceToBasket(idProduct, counter);
      dispatch(getBasketAction());
    } catch (error) {
      dispatch(checkErrors());
    }
  };
};
