import { combineReducers } from "redux";
import tableReducer from "./TableReducer";
import filterReducer from "./filterReducer";
import orderReducer from "./orderReducer";

const reducer = combineReducers({
  tableReducer: tableReducer,
  filterReducer: filterReducer,
  orderReducer: orderReducer
});

export default reducer;
