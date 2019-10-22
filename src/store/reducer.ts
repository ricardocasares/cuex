import { combineReducers } from "redux";
import { reducer as symbols } from "@/modules/symbols/store";
import { reducer as accounts } from "@/modules/accounts/store";
import { reducer as exchange } from "@/modules/exchange/store";

export const reducer = combineReducers({ symbols, accounts, exchange });
