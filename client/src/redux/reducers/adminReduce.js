import { DATA_CLEAR, SET_USERS } from "../actionTypes";

const initialStore = {};

const adminReduce = (state = initialStore, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, ...action.payload };
    case DATA_CLEAR:
      return initialStore;
    default:
      return { ...state };
  }
};

export default adminReduce;
