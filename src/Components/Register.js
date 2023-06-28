import React from "react";
import "../App.css"

function Register() {
    return ( 
        <>
            <section id="section">
                <div id="max-width">
                    <h1>REGISTER</h1>
                    <form action="">
                        <div>
                            <p>Username</p>
                            <input type="email"/>
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="password"/>
                        </div>
                    </form>
                    <button>REGISTER</button>
                </div>   
            </section>   
        </>
     );
}

export default Register;