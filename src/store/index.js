import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
// import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './root_reducer';

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;