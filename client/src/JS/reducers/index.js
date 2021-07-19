import { contactReducer } from "./contacts";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ contactReducer });
