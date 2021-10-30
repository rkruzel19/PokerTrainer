import './App.css';
import Axios from 'axios'
import Login from './components/Login';
import NewUser from './components/NewUser';
import User from './components/User';
import NewUserPage from './components/view/NewUserPage';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/view/LoginPage';
import UserHome from './components/view/UserHome'

function App() {
    Axios.get('http://localhost:3001/api/getAllUsers').then((response) =>{
        const userData = response.data[0]
        console.log(userData)
    })
  return (
    <div>
      <div className="header">
        <Header/>
      </div>
      <div className="nav_bar">
        <label>Navigation goes here</label>
      </div>
      <div className="main_content">
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
