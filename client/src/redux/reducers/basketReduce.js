import { ADD_BASKET_DATA, DATA_CLEAR, SET_BASKET_DATA } from "../actionTypes";

const initialStore = {
  devicesInBasket: [],
};

const basketReduce = (state = initialStore, action) => {
  switch (action.type) {
    case SET_BASKET_DATA:
      return { ...state, ...action.payload };
    case ADD_BASKET_DATA:
      return { ...state, devices: [...state.devices, ...action.payload] };
    case DATA_CLEAR:
      return initialStore;
    default:
      return { ...state };
  }
};

export default basketReduce;
