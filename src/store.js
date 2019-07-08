import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import axios from 'axios';

export const HTTP_ACTION = "HTTP_ACTION";

const httpMiddleware = store => next => action => {
    if (action[HTTP_ACTION]) {
        const actionInfo = action[HTTP_ACTION];
        const fetchOptions = {
            method: actionInfo.verb,
            url: actionInfo.endpoint,
            data: actionInfo.payload || null,
            headers: actionInfo.headers
        };
        next({
            type: actionInfo.type
        });
        axios(fetchOptions)
            .then(response => response.json())
            .then(data => next({
                type: actionInfo.type + "_SUCCESS",
                payload: data
            }))
            .catch(error => next({
                type: actionInfo.type + "_FAILURE",
                payload: error
            }));
    } else {
        return next(action);
    }
}

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}


const store = createStore(rootReducer, applyMiddleware(httpMiddleware, logger));

export default store;