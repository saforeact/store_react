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
      dispatch(checkErrors(error));
    }
  };
};
export const addDeviceToBasketBasketAction = (idProduct, counter) => {
  return async (dispatch) => {
    try {
      await basketAPI.addDeviceToBasket(idProduct, counter);
      dispatch(getBasketAction());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
export const changeCounterInDeviceAction = (idProduct, counter) => {
  return async (dispatch) => {
    try {
      await basketAPI.changeCounterInDevice({ idProduct, counter });
      dispatch(getBasketAction());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
export const removeItemFromBasketAction = (idProduct) => {
  return async (dispatch) => {
    try {
      await basketAPI.removeItemFromBasket({ data: { idProduct } });
      dispatch(getBasketAction());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
export const removeAllItemFromBasketAction = () => {
  return async (dispatch) => {
    try {
      await basketAPI.removeAllItemFromBasket();
      dispatch(getBasketAction());
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
export const buyDevicesAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await basketAPI.buyDevicesFromBasket();
      window.location = data.url;
    } catch (error) {
      dispatch(checkErrors(error));
    }
  };
};
