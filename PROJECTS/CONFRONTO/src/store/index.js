import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import catalogReducer from "./reducers/catalogReducer";
import compareReducer from "./reducers/compareReducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    catalog: catalogReducer,
    compare: compareReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
