import "../style/Login.css"
import { useState } from 'react'
import Axios from 'axios'
import User from "./User"
import UserHomepage from "./UserHomepage"

function Login(){

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")

    function createUser(userInfo) {
        setUser(<User info = {{
            userName: userInfo.userName,
            password: userInfo.password,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email
        }}/>)
    }

    function authenticateUser() {
        Axios.post('http://localhost:3001/api/login', {
            userName: userName, 
            password: password
        }).then((response) =>{
            createUser(response.data[0])
        })

        
    }

    if (user == "") {
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
            </div>
        ) 
    } else {
        // console.log(user)
        return (
            <UserHomepage info = {{
                user: user
            }}/>
        )
    }
}

export default Login