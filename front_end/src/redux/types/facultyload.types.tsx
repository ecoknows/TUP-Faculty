import { Interface } from "readline";

export interface FacultyLoadInterface{
    professor:string,

    course_code:string,
    section:string,
    subject_code:string,

    day:string,
    time_start:string,
    time_end:string,
    assigned_to  :string,

    units: number,
    venue: string,
    number_of_students: number,
}

export interface FLInterface { 
    loading : boolean,
    facultyInfo : FacultyLoadInterface[],
    error: boolean,
}

export const FACULTY_LOAD_REQUEST = 'FACULTY_LOAD_REQUEST';
export const FACULTY_LOAD_SUCCESS = 'FACULTY_LOAD_SUCCESS';
export const FACULTY_LOAD_FAIL = 'FACULTY_LOAD_FAIL';

interface FacultyLoadRequest {
    type: typeof FACULTY_LOAD_REQUEST,
    payload: boolean,
}

interface FaclutyLoad{
    type: typeof FACULTY_LOAD_SUCCESS | typeof FACULTY_LOAD_FAIL,
    payload: FacultyLoadInterface[],
}

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

interface FLSuccesType{
    loading : boolean,
    facultyInfo : FacultyLoadInterface[]
}
interface FLRequestType{
    loading : boolean,
}
interface FLFailType{
    loading : boolean,
    error : any
}

export type FLReducerType = FLSuccesType | FLRequestType | FLFailType;
export type FLActionType = FacultyLoadRequest | FaclutyLoad;

