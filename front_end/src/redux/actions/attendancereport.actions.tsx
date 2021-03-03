import Axios from "axios";
import { ATTENDANCE_REPORT_REQUEST, ATTENDANCE_REPORT_FAIL, ATTENDANCE_REPORT_SUCCESS } from "../types/attendancereport.types"

export const listAttendanceReport = ()=> async(dispatch : any, getState: any)=>{
    dispatch({type: ATTENDANCE_REPORT_REQUEST});
    
    const {
        userDetails:{userData},
      } = getState();
    try{
        const { data } = await Axios.get('/users', {
            headers: { Authorization: `Bearer ${userData.token}` },
          });
          dispatch({ type: ATTENDANCE_REPORT_SUCCESS, payload: data });
    }catch(error){
        
        dispatch({type: ATTENDANCE_REPORT_FAIL, payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,});
    }
}

export const sortAttendanceReport = (info : { sortKey: object})=> async(dispatch : any, getState: any)=>{
  const {
      userDetails:{userData},
    } = getState();
  try{
      
      const { data } = await Axios.post(`/users/sort`, info,{
          headers: { Authorization: `Bearer ${userData.token}` },
        });
        
        dispatch({ type: ATTENDANCE_REPORT_SUCCESS, payload: data });
  }catch(error){ 
      
      dispatch({type: ATTENDANCE_REPORT_FAIL, payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,});
  }
}

export const searchAttendanceReport = (text: string)=> async(dispatch : any, getState: any)=>{
  const {
      userDetails:{userData},
    } = getState();
  try{
    console.log("sadasds");
    
      
      const { data } = await Axios.post(`/users/search`, {search : text},{
          headers: { Authorization: `Bearer ${userData.token}` },
      });
        
        dispatch({ type: ATTENDANCE_REPORT_SUCCESS, payload: data });
  }catch(error){ 
      
      dispatch({type: ATTENDANCE_REPORT_FAIL, payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,});
  }
}