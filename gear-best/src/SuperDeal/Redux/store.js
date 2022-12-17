import { legacy_createStore,applyMiddleware,combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducer';
import { newproductReducer } from '../../NewArrive/newRedux/newreducer';
import { homeProductReducer } from '../.././Homepage/homeRedux/homereducer';

const rootReducer = combineReducers({productReducer ,newproductReducer,homeProductReducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
