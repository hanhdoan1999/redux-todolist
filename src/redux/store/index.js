import {createStore, applyMiddleware} from 'redux';
import { RootReducer } from '../reducers';
import thunk from 'redux-thunk';

export const store = createStore(RootReducer, applyMiddleware(thunk));