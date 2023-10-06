import {compose,legacy_createStore,applyMiddleware} from "redux"
import {logger} from "redux-logger"
import {persistReducer,persistStore} from "redux-persist"
import localStorage from "redux-persist/es/storage";
import { rootReducer } from "./rootReducer";
let persistConfig={
    key:"root",
    storage:localStorage,
    blacklist:"user"
}
let PersistReducer=persistReducer(persistConfig,rootReducer)
const middleWares=[logger];
const Enhancer=compose(applyMiddleware(...middleWares))
export const store=legacy_createStore(PersistReducer,undefined,Enhancer)
export const persisted=persistStore(store)