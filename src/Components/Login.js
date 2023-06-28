import React, { useEffect, useState } from "react"
import "../App.css"
import { Link } from "react-router-dom";
import axios from "axios"

function Login() {

    const [username, setUsername] = useState();
    const[password,setPassword]=useState()
    const sendtoserver = ()=>{
        const values = {
            username : username,
            password : password
        }

        axios.post('http://localhost:8095/signup',values)
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
}

    const handleSubmit = (event)=>{
        event.preventDefault();
    }

    
    return ( 
        <section id="section">
            <div id="max-width">
                <h1>LOGIN</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <p>Username</p>
                        <input type="email" name="email" onChange={(event)=>setUsername(event.target.value)}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}/>
                    </div>
                    <button type="submit" onClick={sendtoserver}>Login</button>
                </form>
                
                <Link className="Link" to="Register">Register</Link>
            </div>   
        </section>   
     );
}

export default Login;