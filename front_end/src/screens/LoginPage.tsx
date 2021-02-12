
import { Form} from 'react-bootstrap';
import {Button} from '../components';


interface Props {
    
}

const LoginPage = (props: Props) => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Form className='form'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Username" className='w-100'/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                    Forgot password
                    </Form.Text>
                </Form.Group>
                <Button >
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default LoginPage
