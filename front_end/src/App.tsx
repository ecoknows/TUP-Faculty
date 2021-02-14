import {BrowserRouter as Router, Route} from 'react-router-dom';
import { AttendanceReport, LoginPage } from './screens';

function App() {
  return (
    <Router>
      <Route path='/' component={LoginPage} exact/>
      <Route path='/attendaceReport' component={AttendanceReport} exact/>
    </Router>
  );
}

export default App;
