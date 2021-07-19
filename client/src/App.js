import './App.css';
import Login from './components/Login';
import NewUser from './components/NewUser';
import User from './components/User';
import NewUserPage from './components/view/NewUserPage';
import Welcome from './components/Welcome';

function App() {
  return (
    // <User info = {{
    //   userName: "test2",
    //   password: "whatever",
    //   firstName: "Rob",
    //   lastName: "Kruzel",
    //   email: "rkruzel@gmail.com",
    // }}/>
    <Welcome/>
  );
}

export default App;
