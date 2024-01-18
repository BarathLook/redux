import { createStore,applyMiddleware, legacy_createStore } from "redux"; // applyMiddleware function to apply the thunk middleware to the store.
import {thunk} from 'redux-thunk'; //library allows to write asynchronous actions,
import {composeWithDevTools} from 'redux-devtools-extension'; // library enables to use the Redux DevTools browser extension to debug and inspect the state and actions in the store.
// composeWithDevTools function to enhance the store with the ability to use the Redux DevTools extension

import taskReducer from './reducer/taskReducer';

const store = legacy_createStore(
    taskReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;