import { createStore, combineReducers } from "redux";
import { msgReducer } from "./reducers";
//importar los reducers todos

const rootReducer = combineReducers({
    mensagesReducer: msgReducer,
    //poner todos los reducers
})

export default createStore(rootReducer);