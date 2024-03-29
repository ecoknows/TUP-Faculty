import Axios from "axios";
import { FACULTY_LOAD_REQUEST, FACULTY_LOAD_FAIL, FACULTY_LOAD_SUCCESS } from "../types/facultyload.types"

export const listFacultyLoad = ()=> async(dispatch : any, getState: any)=>{
    const {
        userDetails:{userData},
      } = getState();
      
    try{
        const { data } = await Axios.post('/facultyLoad/list', {professor: userData.name} ,{
            headers: { Authorization: `Bearer ${userData.token}` },
          });
          dispatch({ type: FACULTY_LOAD_SUCCESS, payload: data });
    }catch(error){
        
        dispatch({type: FACULTY_LOAD_FAIL, payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,});
    }
}

export const sortFacultyLoad = (info : { sortKey: object})=> async(dispatch : any, getState: any)=>{
  const {
      userDetails:{userData},
    } = getState();
    
  try{
      
      const { data } = await Axios.post(`/facultyLoad/list/sort`, {sortKey: info.sortKey, professor: userData.name},{
          headers: { Authorization: `Bearer ${userData.token}` },
        });
        
        dispatch({ type: FACULTY_LOAD_SUCCESS, payload: data });
  }catch(error){ 
      
      dispatch({type: FACULTY_LOAD_FAIL, payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,});
  }
}


export const searchFacultyLoad = (text: string)=> async(dispatch : any, getState: any)=>{
  const {
      userDetails:{userData},
    } = getState();
  try{
      
      const { data } = await Axios.post(`/facultyLoad/list/search`, {search : text, professor: userData.name},{
          headers: { Authorization: `Bearer ${userData.token}` },
      });
        
        dispatch({ type: FACULTY_LOAD_SUCCESS, payload: data });
  }catch(error){ 
      
      dispatch({type: FACULTY_LOAD_FAIL, payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,});
  }
}