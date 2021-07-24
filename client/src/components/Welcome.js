import NewUser from "./NewUser"
import Login from "./Login"
import "../style/Welcome.css"
import { useState } from 'react'
import NewUserPage from "./view/NewUserPage"
import { Link } from "react-router-dom"

function Welcome(){

    

    return (
        <div className="welcome">
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/newuserpage">
                <button>Create Account</button>
            </Link>
            
        </div>
    )

}

export default Welcome