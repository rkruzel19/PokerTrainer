import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginController from '../controllers/LoginController'

function LoginPage(){

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function loginUser(userName, password){
        <LoginController info={{
            userName: userName,
            password: password
        }} />
    }

    return (
        <div className="login_area">
            <div className="username">
                <label>Username:</label>
                <input
                    onChange = {(e) => setUserName(e.target.value)}
                    name = "userName"
                    type = "text"
                    value = {userName}
                />
            </div>
            <div className="password">
                <label>Password:</label>
                <input
                    onChange = {(e) => setPassword(e.target.value)}
                    name = "password"
                    type = "text"
                    value = {password}
                />
            </div>
            <button onClick={loginUser(userName, password)}>Login</button>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    )

}

export default LoginPage