import * as actionType from '../actions/actionTypes';

const initialState = {
    "dates": {
        "byDates": {
            "date1": {
                "id": "date1",
                "events": ["event1", "event2"]
            },
            "date2": {
                "id": "date2",
                "events": ["event2", "event3", "event4"]
            }
        },
        "allDates": ["date1", "date2"]
    },
    "events": {
        "byId": {
            "event1": {
                "id": "event1",
                "time": "time1",
                "description": "....."
            },
            "event2": {
                "id": "event2",
                "time": "time2",
                "description": "....."
            },
            "event3": {
                "id": "event3",
                "time": "time3",
                "description": "....."
            }
        },
        "allEventsIds": ["event1", "event2", "event3", "event4"]
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_EVENT":
            return 1;
        case "DELETE_EVENT":
        default:
            return state;
    }
}

export default userReducer;