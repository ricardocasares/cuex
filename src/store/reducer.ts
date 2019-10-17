import { combineReducers } from "redux";
import { reducer as exchange } from "@/modules/exchange/store";

export const reducer = combineReducers({ exchange });
