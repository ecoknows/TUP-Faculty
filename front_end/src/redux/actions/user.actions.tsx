import Axios from "axios";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_TIME_IN } from "../types/user.types"

export const signin = (username : string | undefined, password : string | undefined, isAdmin : boolean)=> async(dispatch : any)=>{
    dispatch({type: USER_SIGNIN_REQUEST});
    try{
        const { data } = await Axios.post('/login',{username, password})
        dispatch({type: USER_SIGNIN_SUCCESS, payload:data});    
        if(isAdmin === data.is_admin){
            localStorage.setItem('userInfo', JSON.stringify(data));
        }else{
            dispatch({type: USER_SIGNIN_FAIL, payload: "Invalid Accounts"})
        }
        
    }catch(error){
        
        dispatch({type: USER_SIGNIN_FAIL, payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,});
    }
}

export const signout = () => (dispatch: ({type} : {type: string})=>void) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    dispatch({ type: USER_SIGNOUT });
  };
  
  
export const time_status = (status  : any)=> async(dispatch : any, getState: any)=>{

    const { userDetails: {userData }} = getState();
    
    try{
        const { data } = await Axios.put(`/user/update_time/${status.userData._id}?time_in=${status.time_in}`)
        const mergeData = {...userData, ...data.userUpdated}
        dispatch({type: USER_TIME_IN, payload: mergeData});   
        localStorage.setItem('userInfo', JSON.stringify(mergeData));
    }catch(error){
        
        dispatch({type: USER_SIGNIN_FAIL, payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,});
    }
}


// export const checkUser = ()=> async(dispatch : any)=>{
//     dispatch({type: USER_SIGNIN_REQUEST});
//     try{
//         const data = await check_login_user();
//         dispatch({type: USER_SIGNIN_SUCCESS, payload:data});
//     }catch(error){
//         dispatch({type: USER_SIGNIN_FAIL, payload:
//             error.response && error.response.data.message
//               ? error.response.data.message
//               : error.message,});
//     }
// }
