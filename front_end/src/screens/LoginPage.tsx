import {useEffect, useRef} from 'react';
import { Form} from 'react-bootstrap';
import {View, Text, Input, Button, Error} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import { signin } from '../redux';
import { USER_SIGNIN_FAIL } from '../redux/types/user.types';

interface LoginPageProps{
    history : string[],
    match: any,
}

function LoginPage(props:LoginPageProps){
    const UserState = useSelector((state:any) => state.userDetails)
    const dispatch = useDispatch();
    const password = useRef<HTMLInputElement>();
    const username = useRef<HTMLInputElement>();
    const { loading, userData, error } = UserState;
    const isAdmin = props.match.path === '/admin';
    
    
    useEffect(()=>{
        if(userData){
            if(userData.is_admin && isAdmin)
                props.history.push('/admin/home/attendanceReport');
            if(!userData.is_admin && !isAdmin)
                props.history.push('/faculty');
        }
    }, [userData]);
    
    return (
        <View height='screen' flex center middle column >
            {isAdmin ?
             <View style={{marginBottom: 50}} column>
                <Text type='title' black > Welcome Admin </Text>
            </View> :
            <View style={{marginBottom: 50}} flex column center middle>
                <Text type='title' black > Welcome to </Text>
                <Text type='title' black > TUP Faculty System </Text>
            </View>

             }
             {
                 error ? <Error>{error}</Error> : null
             }

            <form className='flex flex-col'>

                 <Input placeholder='Username' type='text' className='mb-3' ref={username}/>
                 <Input placeholder='Password' type='password' toggler ref={password}/>

                 <Text type='default' >forgot password</Text>
                 <Button title='Login' className='self-center mt-3' onClick={()=>{

                     dispatch(signin(username?.current?.value, password?.current?.value, isAdmin))
                 }}/>
             </form>
        </View>
    )
}

export default LoginPage
