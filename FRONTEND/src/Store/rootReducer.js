import { combineReducers } from "redux"
import { UserReducer } from "./userReducer/UserReducer"
import { catagoriesReducer } from "./catagoriesReducer/catagoriesReducer"
import { CartReducer } from "./cartReducer/cartReducer"
export const rootReducer=combineReducers({
user:UserReducer,
catagories:catagoriesReducer,
cart:CartReducer
})