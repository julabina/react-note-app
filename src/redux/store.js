import { applyMiddleware, combineReducers, createStore } from "redux";
import noteReducer from './noteReducer/noteReducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    noteReducer
})

const localStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);
      localStorage.setItem('notes', JSON.stringify(getState()));
      return result;
    };
  };

const persistedState = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem('notes')) : {} 

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, localStorageMiddleware));

store.subscribe(()=>{
    localStorage.setItem('notes', JSON.stringify(store.getState()))
  }) 

export default store;