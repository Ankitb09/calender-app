import * as actionTypes from './actionTypes';

function httpAction(action) {
    const httpActionTemplate = {
        type: "",
        endpoint: null,
        verb: "GET",
        payload: null,
        headers: []
    };
    return {
        HTTP_ACTION: Object.assign({}, httpActionTemplate, action)
    };
}


export const getQuoteAction = () => {
    return httpAction({
        type: actionTypes.CREATE_EVENT,
        endpoint: "http://localhost:4000/"
    });
}