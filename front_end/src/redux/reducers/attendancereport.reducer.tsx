import { ARActionType, ARReducerType, ATTENDANCE_REPORT_REQUEST, ATTENDANCE_REPORT_FAIL, ATTENDANCE_REPORT_SUCCESS } from '../types/attendancereport.types';

const initialState : ARReducerType = {
    loading: false,
    reportDetails: [{
        _id: '', 

        id_number: '',
        name: '',
        department:'',
        date_time_in: '',
        time_in: '',
        time_out: '',
    }],
    error: false,
}

export const attendanceReportReducer =(state: ARReducerType = initialState, action: ARActionType) : ARReducerType =>{
    switch(action.type){
        case ATTENDANCE_REPORT_REQUEST:
            return {loading : true};
        case ATTENDANCE_REPORT_SUCCESS:
            return {loading: false, reportDetails: action.payload}
        case ATTENDANCE_REPORT_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state;
    }
}
