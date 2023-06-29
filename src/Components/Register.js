import React, { useEffect, useState } from "react";
import "../App.css"
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {

    const [username, setUsername] = useState("");
    const[password,setPassword]=useState()
    const[error,setError]=useState()
    const[userdata,setUserdata]=useState([])
    const[inputVal,setInputVal] = useState()
    const[passwordVal,setPasswordVal] = useState()
    let dataAlreadyExist = false;
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8095/signup')
        .then(res=>{setUserdata(res.data)})
        .catch(err=>{console.log(err)})
    })

    const sendtoserver = ()=>{
        const values = {
            username : username,
            password : password
        }

        userdata.map((list)=>{
            if(list.username === username)
            {
                dataAlreadyExist = true;
            }
            return list
        })

        if(username === ""){
            setError("Field should not br empty")
        }
        else if(dataAlreadyExist){
            setError("Username already exist")
        }
        else{
        axios.post('http://localhost:8095/signup',values)
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        relocate();
        }
}

    const handleSubmit = (event)=>{
        event.preventDefault();
    }

    function relocate(){
        navigate('/');
    }

    return ( 
        <>
            <section id="section">
                <div id="max-width">
                    <h1>REGISTER</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <p>Username</p>
                            <input value={inputVal} onChange={(event)=>{
                                setUsername(event.target.value)
                                setInputVal(event.target.value)
                                }}/> <br></br>
                            <small className="error">{error}</small>
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="password" value={passwordVal} onChange={(event)=>{
                                setPassword(event.target.value)
                                setPasswordVal(event.target.value)
                                }}/>
                            <small></small>
                        </div>
                        <button onClick={sendtoserver}>REGISTER</button>
                    </form>
                    <Link className="Link" to="/">LOGIN</Link>
                </div>   
            </section>   
        </>
     );
}

export default Register;