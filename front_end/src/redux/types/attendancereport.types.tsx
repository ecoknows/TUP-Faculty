import { Interface } from "readline";

export interface AttendanceReportInterface{
    _id: string, 
    id_number: string,
    name: string,
    department: string,
    date_time_in: string,
    time_in: string,
    time_out: string,
}

export interface ARInterface { 
    loading : boolean,
    reportDetails : AttendanceReportInterface[],
    error: boolean,
}

export const ATTENDANCE_REPORT_REQUEST = 'ATTENDANCE_REPORT_REQUEST';
export const ATTENDANCE_REPORT_SUCCESS = 'ATTENDANCE_REPORT_SUCCESS';
export const ATTENDANCE_REPORT_FAIL = 'ATTENDANCE_REPORT_FAIL';

interface AttendanceReportRequest {
    type: typeof ATTENDANCE_REPORT_REQUEST,
    payload: boolean,
}

interface AttendanceReport{
    type: typeof ATTENDANCE_REPORT_SUCCESS | typeof ATTENDANCE_REPORT_FAIL,
    payload: AttendanceReportInterface[],
}

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

interface ARSuccesType{
    loading : boolean,
    reportDetails : AttendanceReportInterface[]
}
interface ARRequestType{
    loading : boolean,
}
interface ARFailType{
    loading : boolean,
    error : any
}

export type ARReducerType = ARSuccesType | ARRequestType | ARFailType;
export type ARActionType = AttendanceReportRequest | AttendanceReport;

