import "../style/NewUser.css"
import { useState } from 'react'
import Axios from 'axios'

function NewUser() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    

    function submitNewUser() {
        Axios.post('http://localhost:3001/api/insert', {
            userName: userName, 
            password: password, 
            firstName: firstName, 
            lastName: lastName, 
            email: email
        })
    }

    return (
        <div className="new_user">
            <label>New User Setup</label>
            <div className="username">
                <label>Username:</label>
                <input 
                    onChange={(e) => setUserName(e.target.value)} 
                    name="userName" 
                    type="text" 
                    value={userName}
                />
            </div>
            <div className="password">
                <label>Password:</label>
                <input 
                    onChange={(e) => setPassword(e.target.value)} 
                    name="password" 
                    type="text" 
                    value={password}
                />
            </div>
            <div className="first_name">
                <label>First Name:</label>
                <input 
                    onChange={(e) => setFirstName(e.target.value)} 
                    name="firstName" 
                    type="text" 
                    value={firstName}
                />
            </div>
            <div className="last_name">
                <label>Last Name:</label>
                <input 
                    onChange={(e) => setLastName(e.target.value)} 
                    name="lastName" 
                    type="text" 
                    value={lastName}
                />
            </div>
            <div className="email">
                <label>Email:</label>
                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    name="email" 
                    type="text" 
                    value={email}
                />
            </div>
            <button onClick={submitNewUser} >Create Account</button>
        </div>
    )

}

export default NewUser