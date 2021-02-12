import {BrowserRouter as Router, Route} from 'react-router-dom';
import { LoginPage } from './screens';

function App() {
  return (
    <Router>
      <Route path='/' component={LoginPage}/>
    </Router>
  );
}

export default App;
