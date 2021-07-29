import { useState } from 'react'
import "../style/UserHomepage.css"

function UserHomepage(props) {

    const [user, setUser] = useState(props.info.user.props.info)

    return (
        <div className="homepage">
            <div className="side_panel">
                <h3>Username: {user.userName}</h3>
                <h3>Password: {user.password}</h3>
                <h3>First Name: {user.firstName}</h3>
                <h3>Last Name: {user.lastName}</h3>
                <h3>Email: {user.email}</h3>
                <h3>tournaments: {user.tournaments}</h3>
            </div>
            <div className="main_area">
                <h1>You have played {user.tournaments} tournaments</h1>
            </div>
            
        </div>
        
    )

}

export default UserHomepage