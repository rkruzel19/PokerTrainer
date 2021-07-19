import NewUser from "./NewUser"
import Login from "./Login"
import "../style/Welcome.css"
import { useState } from 'react'
import NewUserPage from "./view/NewUserPage"

function Welcome(){

    function handleClick(){
        console.log("test")
        return <NewUserPage/>
    }

    return (
        <div className="welcome">
            <button onClick={handleClick}>Create Account</button>
        </div>
    )

}

export default Welcome