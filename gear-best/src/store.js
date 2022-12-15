import { reducer } from "./AppOnly/reduxAppOnly/reducer";
import thunk from "redux-thunk";
import { legacy_createStore, applyMiddleware, compose } from "redux";

const p = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducer, p(applyMiddleware(thunk)));

export { store };
