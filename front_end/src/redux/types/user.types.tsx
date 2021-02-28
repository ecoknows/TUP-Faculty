export interface UserInterface {
    _id: string,
    username: string,
    password: string,
    is_admin: boolean,
}

export interface UserSignInInterface{
    email: string,
    password: string,
}

export const USER_SIGNIN_REQUEST = 'USER_SIGNIN_REQUEST';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_SIGNIN_FAIL = 'USER_SIGNIN_FAIL';
export const USER_SIGNOUT = 'USER_SIGNOUT';

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

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
interface UserSuccessType{
    loading : boolean,
    userData : UserInterface | UserSignInInterface | null
}
interface UserRequestType{
    loading : boolean,
}
interface UserFailType{
    loading : boolean,
    error : any
}

export type UserReducerType = UserSuccessType | UserRequestType | UserFailType;
export type UserActionType = UserSignInRequest | UserSignIn | UserSignOutRequest; 
