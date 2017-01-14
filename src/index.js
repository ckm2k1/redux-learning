import { combineReducers, createStore } from 'redux';
import member from './reducers/member';
import assets from './reducers/assets';
import device from './reducers/device';
import environment from './reducers/environment';

let reducer = combineReducers(member, assets, device, environment);
let store = createStore(reducer);

export default store;