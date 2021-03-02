import {useEffect, useRef, useState} from 'react';
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
      // if(!userData){
      //     history.push('/');
      // }
  },[userData]);
  return(
    <View>
        <View relative className='hidden lg:flex flex-row items-center justify-end px-4 py-4'>
          <Navbar dispatch={dispatch} history={history} />
        </View>

        <Route path={`${match.url}`} component={Clock} exact/>
        <Route path={`${match.url}/load`} component={FacultyLoad} exact/>
        <Route path={`${match.url}/fteoverload`} component={FTEOverload} exact/>
        <Route path={`${match.url}/report`} component={GenerateReport} exact/>
    </View>
  );
}

let oldVal : any = 0;

function Navbar(props: any){
  const { dispatch, history, to } = props;
  const [current, setCurrent] : any= useState(43);
  const [tab, setTab] : any= useState();

  return(
    <View relative flex >
         <TextRef to='/faculty' setCurrent={setCurrent} current={current} setTab={setTab} tab={tab}>Clock</TextRef>
         <TextRef to='/faculty/load' setCurrent={setCurrent} current={current} setTab={setTab} tab={tab}>Class List</TextRef>
         <TextRef to='/faculty/fteoverload' setCurrent={setCurrent} current={current} setTab={setTab} tab={tab}>FTE/Overload</TextRef>
         <TextRef to='/faculty/report' setCurrent={setCurrent} current={current} setTab={setTab} tab={tab}>Generate Report</TextRef>
        <View onClick={()=>{
            dispatch(signout());
            history.push('/')
          }} className='ml-10'>
          <Text className='text-black text-lg mb-2 cursor-pointer'>Logout</Text>
        </View>
          <View absolute style={{
            bottom:0, 
            backgroundColor:'red', 
            height: '100%',
            zIndex: -10, 
            width: current, 
            left: oldVal,
            transition: "all 0.4s ease"
          }}/>
    </View>
    
  )
}

const TextRef =(props : any)=>{
  const { onClick, children, to, className, setCurrent, setTab, tab, ...rest } = props
  const ref = useRef<any>();
  
  return <Link to={to}  onClick={()=>{
                setCurrent(ref.current?.offsetWidth+20)
                oldVal = ref?.current?.offsetLeft;
                setTab(children)
              }}>
                
            <Text {...rest} ref={ref} className={`text-${tab === children ? 'white' : 'black'} text-lg mb-2 cursor-pointer ml-10 ${className}`}
            style={{ transition: 'color 0.3s ease'}}
            >{children}</Text>
          </Link>
  

}

export default App;

