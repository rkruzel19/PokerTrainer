import NewUser from "./NewUser"
import Login from "./Login"
import "../style/Welcome.css"
import { useState } from 'react'
import NewUserPage from "./view/NewUserPage"
import { Link } from "react-router-dom"

function Welcome(){

    

    return (
        <div className="welcome">
            <Link to="/loginPage">
                <button>Login</button>
            </Link>
            <Link to="/newUserPage">
                <button>Create Account</button>
            </Link>
            
        </div>
    )

}

export default Welcome