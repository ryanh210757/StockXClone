import React, { useState } from "react";
import axios from "axios";
import logo from '../images/Stockx_logo.png'
import './styles.css'
import {Link, useNavigate} from "react-router-dom"

export default function Login(){

    const history = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:4000/login", {
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/")
                }
                else if(res.data==="not exist"){
                    alert("user does not exist")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e)
            })
            

        } catch (error) {
            
        }
    }

    return (
        <>
        <div className="logoDiv">
            <Link to="/"><img src={logo} className="logo" alt="Logo" /></Link>
        </div>
        <div className="login">
            <form action="POST">
                <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" name="" id=""/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" name="" id=""/>

                <input type="submit" onClick={submit}/>
            </form>
        </div>
        <p>Need an account? <Link to="/signup">Signup Page</Link></p>
        
        </>
        
    )
}