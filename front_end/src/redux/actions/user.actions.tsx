import Axios from "axios";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../types/user.types"

export const signin = (username : string | undefined, password : string | undefined)=> async(dispatch : any)=>{
    dispatch({type: USER_SIGNIN_REQUEST});
    try{
        const { data } = await Axios.post('/login',{username, password})
        dispatch({type: USER_SIGNIN_SUCCESS, payload:data});    
        console.log(data, " wathe");
        
        localStorage.setItem('userInfo', JSON.stringify(data));
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
