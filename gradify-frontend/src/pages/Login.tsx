import React from "react";
import './Login.css'
import '../assets/college-student.jpg'
const Login: React.FunctionComponent = ()=>{
    return(
        <>
            <div className="main-container">
                
                <div className="login-pic">
                </div>

                <div className="login-input-container">
                    <div className="loginheaders">
                        <h1>GRADIFY</h1>
                        <h3>SIGN IN</h3>
                        <span>Login to access your student portal</span>
                        <form className="loginform">
                            <h4>Email</h4>
                            <input className="username" type="text"/>
                            <h4>Password</h4>
                            <input className="password" type="password"/>
                            <button className="btnLogin" type="submit">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;