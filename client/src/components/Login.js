import "../style/Login.css"
import { useState } from 'react'
import Axios from 'axios'
import User from "./User"
import UserHomepage from "./UserHomepage"
import { Link } from "react-router-dom"
import { loginUser } from "./controllers/LoginController"

function Login(){

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function authenticateUser() {
        Axios.post('http://localhost:3001/api/login', {
            userName: userName, 
            password: password
        }).then((response) =>{
            const userData = response.data[0]
            console.log(userData)
        })
        // console.log("clicked")
        // loginUser(userName, password)

        
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
            <button onClick={authenticateUser}>Login</button>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    ) 
    
}

export default Login