
import { Button, Form} from 'react-bootstrap';
import {View, Text, Input} from '../components';


function LoginPage(){
    
    return (
        <View height='100vh' center middle column >
            <Text type='title' ><View></View></Text>
            <Form >
                 <Form.Group controlId="formBasicEmail">
                    <Input placeholder='Username' type='text'/>
                 </Form.Group>

                 <Form.Group controlId="formBasicPassword">
                     <Input placeholder='Password' type='password' toggler/>
                     <Form.Text className="text-muted">
                         forgot password
                     </Form.Text>
                 </Form.Group>
             </Form>
        </View>
    )
}

export default LoginPage
