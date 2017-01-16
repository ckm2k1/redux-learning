import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as member from './reducers/member';
import * as assets from './reducers/assets';
import * as device from './reducers/device';
import * as environment from './reducers/environment';

let reducers = {
  ...member,
  ...assets,
  ...device,
  ...environment
};


let reducer = combineReducers(reducers);
let store = createStore(reducer, applyMiddleware(thunk));

window.store = store;

export default store;
