import * as actionTypes from './actionTypes';

const ROOTURL = "http://localhost:4000";

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


export const createEvent = () => {
    return httpAction({
        type: actionTypes.CREATE_EVENT,
        endpoint: ROOTURL
    });
}

export const requestEvents = () => {
    return httpAction({
        type: actionTypes.FETCH_EVENT,
        endpoint: `${ROOTURL}/reminders`
    });
};

export const requestEventDates = (date="") => {
    return httpAction({
        type: actionTypes.FETCH_EVENT_DATES,
        endpoint: `${ROOTURL}/dates`
    });
};

export const postEvents = (data) => {
   
    return httpAction({
        type: actionTypes.POST_EVENTS,
        verb: "POST",
        payload: data,
        endpoint: `${ROOTURL}/reminders`
    });
};


export const editEvent = () => {
    return httpAction({
        type: actionTypes.EDIT_EVENT,
        endpoint: ROOTURL
    });
}

export const deleteEvent = () => {
    return httpAction({
        type: actionTypes.DELETE_EVENT,
        endpoint: ROOTURL
    });
}