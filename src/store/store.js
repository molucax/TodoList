import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer/reducer.js";
import thunk from "redux-thunk";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk))) // en este proyecto thunk no lo necesitamos porque no estamos trabajando con asincronias.

export default store