// configureStore.js
// creates and returns redux store

import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { routerReducer as router, routerMiddleware } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import globalSagas from '../sagas/globalSagas';
import rootReducer from '../reducers/rootReducer';

function configureStore(defaultState) {
    const middlewares = [];
    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);

    /*
    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger();
        middlewares.push(logger);
    }
    */

    const store = createStore(rootReducer, defaultState, applyMiddleware(...middlewares));
    sagaMiddleware.run(globalSagas);
    return store;
};

export default configureStore;
