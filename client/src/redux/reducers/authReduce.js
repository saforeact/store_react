import { DATA_CLEAR, SET_AUTH } from "../actionTypes";

const initialStore = {
  isAuth: false,
};

const authReduce = (state = initialStore, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.payload,
      };
    case DATA_CLEAR:
      return {
        isAuth: false,
      };
    default:
      return { ...state };
  }
};

export default authReduce;
