import {createStore,combineReducers,applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import MainPageReducer from "./main-page-reducer";


let reducers = combineReducers({
	MainPageReducer: MainPageReducer,
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;
