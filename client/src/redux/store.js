import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import adminReduce from "./reducers/adminReduce";
import authReduce from "./reducers/authReduce";
import basketReduce from "./reducers/basketReduce";
import devicesReduce from "./reducers/devicesReduce";
import formsErrorReduce from "./reducers/formsErrorReduce ";
import userReduce from "./reducers/userReduce";

const reducers = combineReducers({
  errors: formsErrorReduce,
  auth: authReduce,
  user: userReduce,
  admin: adminReduce,
  device: devicesReduce,
  basket: basketReduce,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
