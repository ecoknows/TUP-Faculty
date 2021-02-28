export interface UserInterface {
    _id: string,
    id_number:string,
    username: string,
    password: string,
    is_admin: boolean,

    name: string,
    department: string,
    
    date_time_in: string,
    time_in: string,
    time_out: string,

}

export interface UserSignInInterface{
    email: string,
    password: string,
}

export const USER_SIGNIN_REQUEST = 'USER_SIGNIN_REQUEST';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_SIGNIN_FAIL = 'USER_SIGNIN_FAIL';
export const USER_SIGNOUT = 'USER_SIGNOUT';
export const USER_TIME_IN = 'USER_TIME_IN';

interface UserSignInRequest {
    type: typeof USER_SIGNOUT,
    payload: {},
}
interface UserSignOutRequest {
    type: typeof USER_SIGNIN_REQUEST,
    payload: boolean,
}

interface UserSignIn{
    type: typeof USER_SIGNIN_SUCCESS | typeof USER_SIGNIN_FAIL,
    payload: UserInterface,
}

interface UsertTimeIn{
    type: typeof USER_TIME_IN,
    payload: UserInterface,
}
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
interface UserSuccessType{
    loading ?: boolean,
    userData ?: UserInterface | UserSignInInterface | null | object
    error ?: any
}
// interface UserRequestType{
//     loading : boolean,
// }
// interface UserFailType{
//     loading : boolean,
//     error : any
// }

export type UserReducerType = UserSuccessType ;
export type UserActionType = UserSignInRequest | UserSignIn | UserSignOutRequest | UsertTimeIn; 
