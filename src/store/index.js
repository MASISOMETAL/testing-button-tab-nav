import { createStore, combineReducers, applyMiddleware } from "redux";
import { msgReducer } from "./reducers";
import thunk from "redux-thunk";
//importar los reducers todos

const rootReducer = combineReducers({
    mensagesReducer: msgReducer,
    //poner todos los reducers
});

export default createStore(rootReducer, applyMiddleware(thunk));