import './App.css';
import Login from './components/Login';
import NewUser from './components/NewUser';
import User from './components/User';
import NewUserPage from './components/view/NewUserPage';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Header/>
      </div>
      <div className="nav_bar">
        <label>Navigation goes here</label>
      </div>
      <div className="main_content">
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/login" component={Login} />
          <Route path="/newuserpage" component={NewUserPage} />
        </Switch>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
