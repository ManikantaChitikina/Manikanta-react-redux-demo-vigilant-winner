import {createStore,applyMiddleware} from 'redux'
//import cakeReducer from './cake/cakeReducer';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));
export default store