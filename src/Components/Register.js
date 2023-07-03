import React, { useEffect, useState } from "react";
import "../App.css"
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {

    const [username, setUsername] = useState("");
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")
    const[userdata,setUserdata]=useState([])
    const[inputVal,setInputVal] = useState("")
    const[passwordVal,setPasswordVal] = useState("")
    const[passerror,setPasserror] =useState("")
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
            return false
        }
        else if(password === "" && username !== ""){
            setError("")
            setPasserror("field should not be empty")
            return false
        }
        else if(!emailValidation(username)){
            setError("Enter a vaild Email")
            return false
        }
        else if(username !== "" && password !== "" && password !==" "&& emailValidation(username)){
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

    function emailValidation(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    return ( 
        <>
            <section id="section">
                <div id="max-width">
                <div id="title"><h2 className="t-1">H</h2><h2 className="t-2">A</h2><h2 className="t-3">H</h2><h2 className="t-4">A</h2><h2 className="t-5">N</h2></div>
                    <h1>REGISTER</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <p>Enter Your Email</p>
                            <input value={inputVal} onChange={(event)=>{
                                setUsername(event.target.value)
                                setInputVal(event.target.value)
                                }}/> <br></br>
                            <small className="error">{error}</small>
                        </div>
                        <div>
                            <p>Create a password</p>
                            <input type="password" value={passwordVal} onChange={(event)=>{
                                setPassword(event.target.value)
                                setPasswordVal(event.target.value)
                                }}/> <br></br>
                            <small className="error">{passerror}</small>
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