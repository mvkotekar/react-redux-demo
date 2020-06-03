import { createStore } from "redux";
import { cakeReducer } from "../cake/cakeReducer";
import { iceReducer } from "../cake/iceReducer";
import { combineReducers } from "redux";

//Demo on how to do combining multiple reducers
//Store can accept only one reducer. Combine reducer will take all the different reducer
//and make one full reducer to passdown to createstore
const allReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
});

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
