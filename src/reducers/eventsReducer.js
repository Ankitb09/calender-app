import * as actionType from '../actions/actionTypes';


const initialState = {
    reminders: {},
    dates: {},
    loading: false
}

const remindersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_EVENT:
            return {
                ...state, loading: false
            };
            
        case actionType.FETCH_EVENT_SUCCESS:
            let reminderdObj = {};
            action.payload.forEach((item) => {
                reminderdObj[item.id] = item
            })

            return {
                ...state, loading: false, reminders: reminderdObj
            };
        case actionType.FETCH_EVENT_FAILURE:
            return {
                ...state, loading: false, error: action.error
            };
        case actionType.FETCH_EVENT_DATES:
            return {
                ...state, loading: false
            };
        case actionType.FETCH_EVENT_DATES_SUCCESS:
            let dateObj = {};
            action.payload.forEach((item) => {
                dateObj[item.id] = item
            })

            return {
                ...state, loading: false, dates: dateObj
            };
        case actionType.FETCH_EVENT_DATES_FAILURE:
            return {
                ...state, loading: false, error: action.error
            };
        default:
            return state;
    }
}

export default remindersReducer;