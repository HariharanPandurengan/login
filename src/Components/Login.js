import React, { useEffect, useState } from "react"
import "../App.css"
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState("");
    const[password,setPassword]=useState("")
    const[userdata,setUserdata] =useState()
    const[error,SetError] = useState("")
    const[passError,setPassError] = useState()
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8095/signup')
        .then(res=>{setUserdata(res.data)})
        .catch(err=>{console.log(err)})
    })

    function logind(){
        userdata.map((list)=>{
            if(username === ""){
                SetError("Field should not be empty")
            }
            else if(username !== list.username){
                SetError("username dose not exist")
            }
            else if(username === list.username && password === ""){
                SetError("")
                setPassError("Field should not be empty")
            }
            else if(username === list.username && password !== list.password){
                SetError("")
                setPassError("Wrong Password")
            }
            else if(username === list.username && password === list.password){
                navigate('Home');
            }
            return list
        })
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
                        <input onChange={(event)=>setUsername(event.target.value)}/> <br></br>
                        <small className="error">{error}</small>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}/> <br></br>
                        <small className="error">{passError}</small>
                    </div>
                    <button type="submit" onClick={logind}>Login</button>
                </form>
                
                <Link className="Link" to="Register">Register</Link>
            </div>   
        </section>   
     );
}

export default Login;