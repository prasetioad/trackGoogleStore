import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reduce';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store