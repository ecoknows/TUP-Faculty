import { FLActionType, FLReducerType, FACULTY_LOAD_REQUEST, FACULTY_LOAD_FAIL, FACULTY_LOAD_SUCCESS } from '../types/facultyload.types';

const initialState : FLReducerType = {
    loading: false,
    facultyInfo: [{
        professor:"",

        course_code:"",
        section:"",
        subject_code:"",

        day:"",
        time_start:"",
        time_end:"",
        assigned_to  :"",

        units: 0,
        venue: "",
        number_of_students: 0,
    }],
    error: false,
}

export const facultyLoadReducer =(state: FLReducerType = initialState, action: FLActionType) : FLReducerType =>{
    switch(action.type){
        case FACULTY_LOAD_REQUEST:
            return {loading : true};
        case FACULTY_LOAD_SUCCESS:
            return {loading: false, facultyInfo: action.payload}
        case FACULTY_LOAD_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state;
    }
}
