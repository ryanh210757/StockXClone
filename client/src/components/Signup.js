import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"

export default function Signup(){
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:4000/signup", {
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("user already exists")
                }
                else if(res.data==="not exist"){
                    history("/")
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="login">
            <form action="POST">
                <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" name="" id=""/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" name="" id=""/>

                <input type="submit" onClick={submit}/>
            </form>
            <p>OR</p>
            <Link to="/login">Login Page</Link>
        </div>
    )
}