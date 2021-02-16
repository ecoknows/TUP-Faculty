
import { Form} from 'react-bootstrap';
import {View, Text, Input, Button} from '../components';


function LoginPage(){
    return (
        <View height='screen' center middle column >
            <Text type='title' black style={{marginBottom: 100}}> Welcome Admin</Text>

            <form className='flex flex-col'>
                 <Input placeholder='Username' type='text' className='mb-3'/>
                 
                 <Input placeholder='Password' type='password' toggler/>
                 <Text >forgot password</Text>
                 <Button title='Login' className='self-center mt-3' />
             </form>
        </View>
    )
}

export default LoginPage
