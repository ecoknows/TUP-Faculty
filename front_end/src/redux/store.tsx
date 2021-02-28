import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { attendanceReportReducer } from './reducers/attendancereport.reducer';
import { userSignInReducer } from './reducers/user.reducer';
import { facultyLoadReducer } from './reducers/facultyload.reducer';

const RootReducer = combineReducers({
    userDetails: userSignInReducer,
    attendenceReport: attendanceReportReducer,
    facultyLoad: facultyLoadReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
const middleWare = applyMiddleware(thunk);
export const store = createStore(RootReducer, middleWare);
