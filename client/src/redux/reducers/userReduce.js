import { DATA_CLEAR, SET_LOADING, SET_USER } from "../actionTypes";

const initialStore = { loading: false, data: {} };

const userReduce = (state = initialStore, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };

    case SET_LOADING:
      return {
        ...state,
        ...action.payload,
      };

    case DATA_CLEAR:
      return initialStore;
    default:
      return { ...state };
  }
};

export default userReduce;
