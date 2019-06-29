import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

export const HTTP_ACTION = "HTTP_ACTION";

const httpMiddleware = store => next => action => {
    if (action[HTTP_ACTION]) {
        const actionInfo = action[HTTP_ACTION];
        const fetchOptions = {
            method: actionInfo.verb,
            body: actionInfo.payload || null
        };

        next({
            type: actionInfo.type
        });

        fetch(actionInfo.endpoint, fetchOptions)
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
console.log(rootReducer)
const store = createStore(rootReducer, applyMiddleware(httpMiddleware));

export default store;