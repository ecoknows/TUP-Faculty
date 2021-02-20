import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { View, Text } from './components';
import { AttendanceReport, LoginPage, FacultyLoad } from './screens';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={LoginPage} exact/>
        <Route path='/attendanceReport' component={AttendanceReport} exact/>
        <Route path='/faculty' component={FacultyMember}/>
      </Switch>
    </Router>
  );
}


function FacultyMember({match} : {match:{url:string}}){
  return(
    <View>

        <View flex column absolute color='white' style={{border: '1px solid black', padding: 10, top: 100, left: 10}}>
            <Text className='text-black text-lg mb-2 cursor-pointer'>Faculty Load</Text>
            <Text className='text-black text-lg mb-2 cursor-pointer'>Class List</Text>
            <Text className='text-black text-lg mb-2 cursor-pointer'>Generate Report</Text>
            <Text className='text-black text-lg mb-2 cursor-pointer'>Faculty Profile</Text>
        </View>

        <Route path={`${match.url}/load`} component={FacultyLoad} exact/>
    </View>
  );
}

export default App;
