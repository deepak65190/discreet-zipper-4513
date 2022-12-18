import { legacy_createStore,applyMiddleware,combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducer';
import { newproductReducer } from '../../NewArrive/newRedux/newreducer';
import { homeProductReducer } from '../.././Homepage/homeRedux/homereducer';
import {appProductReducer} from '../.././AppOnly/appRedux/appreducer';

const rootReducer = combineReducers({productReducer ,newproductReducer,homeProductReducer,appProductReducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
