import './App.css';
import Login from './components/Login';
import NewUser from './components/NewUser';
import User from './components/User';
import NewUserPage from './components/view/NewUserPage';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Welcome} exact />
        <Route path="/login" component={Login} />
        <Route path="/newuserpage" component={NewUserPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
