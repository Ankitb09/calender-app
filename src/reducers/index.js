import { combineReducers } from 'redux';
import userReducer from './userReducer';
import remindersReducer from './eventsReducer';

const rootReducer = combineReducers({
    events: remindersReducer,
    user: userReducer
})

export default rootReducer;
