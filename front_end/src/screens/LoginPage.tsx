
import { Form} from 'react-bootstrap';
import {View, Text, Input, Button} from '../components';


function LoginPage(){
    return (
        <View height='100vh' center middle column >
            <Text type='title' black style={{marginBottom: 100}}> Welcome Admin</Text>
            <Form className='view items-column items-center items-middle'>
                 <Form.Group >
                    <Input placeholder='Username' type='text'/>
                 </Form.Group>

                 <Form.Group >
                     <Input placeholder='Password' type='password' toggler/>
                     <Text >forgot password</Text>
                 </Form.Group>
                 <Button title='Login' />
             </Form>
        </View>
    )
}

export default LoginPage
