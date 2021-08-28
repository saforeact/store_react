import { DATA_CLEAR, SET_DATA } from "../actionTypes";

const initialStore = {
  users: [],
  roles: [],
  brands: [],
  category: [],
};

const adminReduce = (state = initialStore, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, ...action.payload };
    case DATA_CLEAR:
      return initialStore;
    default:
      return { ...state };
  }
};

export default adminReduce;
