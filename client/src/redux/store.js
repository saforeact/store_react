import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import adminReduce from "./reducers/adminReduce";
import authReduce from "./reducers/authReduce";
import devicesReduce from "./reducers/devicesReduce";
import formsErrorReduce from "./reducers/formsErrorReduce ";
import userReduce from "./reducers/userReduce";

const reducers = combineReducers({
  errors: formsErrorReduce,
  auth: authReduce,
  user: userReduce,
  admin: adminReduce,
  device: devicesReduce,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
