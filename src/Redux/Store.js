import {createStore} from "redux";

import reducers from "./CombineReducers";

const store = createStore(reducers);

export default store;