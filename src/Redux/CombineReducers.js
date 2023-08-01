import {combineReducers} from "redux";

import handleData from "./Reducers";

const reducers = combineReducers({
    counter: handleData,
});

export default reducers;