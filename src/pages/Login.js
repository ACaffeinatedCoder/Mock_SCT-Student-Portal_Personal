import React from "react"
import {  useNavigate } from "react-router-dom"
import '../styles.css'

export default function Login() {
    const navigate = useNavigate()

    return(
        <div>
            <div className="main-background">
                <div className="login-layout">
                    <h1>Welcome, Sienan!</h1>
                    <input
                        placeholder="Username"></input>
                    <br/>
                    <input type="password"
                        placeholder="Password"></input>
                    <br/>
                    <button onClick={() => navigate("/Main")}>Login</button>     
                </div>   
            </div>
        </div>
        
    )
}