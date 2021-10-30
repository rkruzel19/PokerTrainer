import { useEffect, useState } from "react"
import User from "../User"
import Axios from 'axios'
import { Link } from "react-router-dom"

export default function LoginController(props){
    const userName = useState(props.info.userName)
    const password = useState(props.info.password)
}

export function loginUser(userName, password){
    console.log(userName)
    Axios.post('http://localhost:3001/api/login', {
            userName: userName, 
            password: password
        }).then((response) =>{
            const userData = response.data[0]
            console.log(userData)
        })
}