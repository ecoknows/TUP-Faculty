
import { Form} from 'react-bootstrap';
import {View, Text} from '../components';


function LoginPage(){
    
    return (
        <View height='100vh' center middle>
            <Text>Welcome Admin</Text>
        </View>
    )
}

// const LoginPage = (props: Props) => {
//     return (
//         <div className='d-flex align-items-center justify-content-center'>
//             <Form className='form'>
//                 <Form.Group controlId="formBasicEmail">
//                     <Form.Control type="email" placeholder="Username" className='w-100'/>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Control type="password" placeholder="Password" />
//                     <Form.Text className="text-muted">
//                     Forgot password
//                     </Form.Text>
//                 </Form.Group>
//             </Form>
//         </div>
//     )
// }

export default LoginPage
