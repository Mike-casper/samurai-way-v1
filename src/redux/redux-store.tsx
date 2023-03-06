import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialogReducer";
import {ProfilePageReducer} from "./profilePageReducer";

let reducers = combineReducers({
    ProfilePageReducer,
    dialogReducer
});

export let store = createStore(reducers);