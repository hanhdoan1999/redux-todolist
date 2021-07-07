import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

export const RootReducer = combineReducers({
    taskReducer:taskReducer,
});