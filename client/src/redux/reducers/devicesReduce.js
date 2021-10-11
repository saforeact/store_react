import { DATA_CLEAR, SET_DEVICES, SET_DEVICE_LOADING } from "../actionTypes";

const initialStore = {
  devices: [],
  category: [],
  brands: [],
  loading: false,
};

const devicesReduce = (state = initialStore, action) => {
  switch (action.type) {
    case SET_DEVICES:
      return { ...state, ...action.payload };
    case SET_DEVICE_LOADING:
      return { ...state, ...action.payload };
    case DATA_CLEAR:
      return { ...initialStore, ...state, devices: state.devices };
    default:
      return { ...state };
  }
};

export default devicesReduce;
