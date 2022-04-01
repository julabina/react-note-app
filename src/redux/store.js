import { applyMiddleware, combineReducers, createStore } from "redux";
import noteReducer from './noteReducer/noteReducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    noteReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;