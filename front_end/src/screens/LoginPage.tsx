import {useEffect, useRef} from 'react';
import { Form} from 'react-bootstrap';
import {View, Text, Input, Button} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import { signin } from '../redux';

interface LoginPageProps{
    history : string[],
}

function LoginPage(props:LoginPageProps){
    const UserState = useSelector((state:any) => state.userDetails)
    const dispatch = useDispatch();
    const password = useRef<HTMLInputElement>();
    const username = useRef<HTMLInputElement>();
    const { loading, userData, error } = UserState;
    
    useEffect(()=>{
        if(userData){
            props.history.push('/admin/attendanceReport');
        }
    },[userData]);

    return (
        <View height='screen' flex center middle column >
            <Text type='title' black style={{marginBottom: 100}}> Welcome Admin</Text>

            <form className='flex flex-col'>

                 <Input placeholder='Username' type='text' className='mb-3' ref={username}/>
                 <Input placeholder='Password' type='password' toggler ref={password}/>

                 <Text type='default' >forgot password</Text>
                 <Button title='Login' className='self-center mt-3' onClick={()=>{

                     dispatch(signin(username?.current?.value, password?.current?.value))
                 }}/>
             </form>
        </View>
    )
}

export default LoginPage
