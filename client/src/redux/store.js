import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReduce from "./reducers/authReduce";
import formsErrorReduce from "./reducers/formsErrorReduce ";
import userReduce from "./reducers/userReduce";

const reducers = combineReducers({
  errors: formsErrorReduce,
  auth: authReduce,
  user: userReduce,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
