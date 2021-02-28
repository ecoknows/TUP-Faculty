import { UserActionType,UserReducerType,  USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_TIME_IN } from '../types/user.types';

const getUserData = (item : any)=>{
    return JSON.parse(item);
}


const initialState: UserReducerType  = {
    loading: false,
    userData: localStorage.getItem('userInfo')? getUserData(localStorage.getItem('userInfo')): null,
    error: false,
}

export const userSignInReducer =(state:UserReducerType = initialState, action : UserActionType) :UserReducerType =>{
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading : true};
        case USER_SIGNIN_SUCCESS:
            return {loading: false, userData: action.payload}
        case USER_SIGNIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_SIGNOUT:
            return {loading : true}
        case USER_TIME_IN:
            console.log(action.payload, " hatdog");
            
            return {loading: false, userData: action.payload}
        default: 
            return state;
    }
}
