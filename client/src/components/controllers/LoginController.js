import { useEffect, useState } from "react"
import User from "../User"
import Axios from 'axios'
import { Link } from "react-router-dom"

function LoginController(props){

    const userName = useState(props.info.userName)
    const password = useState(props.info.password)


    function createUser(userInfo) {
        <Link to="/userHome">
            {/* return (<User info = {{
                userName: userInfo.userName,
                password: userInfo.password,
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                email: userInfo.email,
                tournaments: "0"
            }}/>) */}
        </Link>
    }

    function authenticateUser() {
        Axios.post('http://localhost:3001/api/login', {
            userName: userName, 
            password: password
        }).then((response) =>{
            createUser(response.data[0])
        })

        
    }

    return authenticateUser()

}

export default LoginController