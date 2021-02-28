import {useEffect} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { View, Text } from './components';
import { AttendanceReport, LoginPage, FacultyLoad, FTEOverload, GenerateReport, Clock } from './screens';
import {signout, store} from './redux';
import {Provider} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={LoginPage} exact/>
          <Route path='/admin' component={Admin}/>
          <Route path='/faculty' component={FacultyMember}/>
        </Switch>
      </Router>
    </Provider>
  );
}

function Admin(props : {match:{url:string}, history: string[]}){

  const UserState = useSelector((state:any) => state.userDetails);
  const { loading, userData, error } = UserState;
  const {match, history} = props;
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
      if(!userData){
          history.push('/');
      }
  },[userData]);
  
  return(
    <View>
      
        <View className='hidden lg:flex flex-row items-center justify-center space-x-4 py-4'>
          
          <View onClick={()=>{
            dispatch(signout());
            history.push('/')
          }}>
            <Text className='text-black text-lg mb-2 cursor-pointer'>Logout</Text>
          </View>
        </View>

        <Route path={`${match.url}/attendanceReport`} component={AttendanceReport} exact/>
    </View>
  );
}

function FacultyMember(props : {match:{url:string}, history: string[]}){

  const UserState = useSelector((state:any) => state.userDetails);
  const { loading, userData, error } = UserState;
  const {match, history} = props;
  const dispatch = useDispatch();
  
  useEffect(()=>{
      if(!userData){
          history.push('/');
      }
  },[userData]);
  return(
    <View>
      
        <View className='hidden lg:flex flex-row items-center justify-center space-x-4 py-4'>
          <Link to='/faculty'>
            <Text className='text-black text-lg mb-2 cursor-pointer'>Clock</Text>
          </Link>
          <Link to='/faculty/load'>
            <Text className='text-black text-lg mb-2 cursor-pointer'>Class List</Text>
          </Link>
          <Link to='/faculty/fteoverload'>
            <Text className='text-black text-lg mb-2 cursor-pointer'>FTE/Overload</Text>
          </Link>
          <Link to='/faculty/report'>
            <Text className='text-black text-lg mb-2 cursor-pointer'>Generate Report</Text>
          </Link>
          <View onClick={()=>{
            dispatch(signout());
            history.push('/')
          }}>
            <Text className='text-black text-lg mb-2 cursor-pointer'>Logout</Text>
          </View>
        </View>

        <Route path={`${match.url}`} component={Clock} exact/>
        <Route path={`${match.url}/load`} component={FacultyLoad} exact/>
        <Route path={`${match.url}/fteoverload`} component={FTEOverload} exact/>
        <Route path={`${match.url}/report`} component={GenerateReport} exact/>
    </View>
  );
}

export default App;
