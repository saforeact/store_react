import { DATA_CLEAR, SET_DEVICES } from "../actionTypes";

const initialStore = {
  devices: [],
};

const devicesReduce = (state = initialStore, action) => {
  switch (action.type) {
    case SET_DEVICES:
      return { ...state, ...action.payload };
    case DATA_CLEAR:
      return initialStore;
    default:
      return { ...state };
  }
};

export default devicesReduce;
