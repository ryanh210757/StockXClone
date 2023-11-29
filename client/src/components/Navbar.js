import React from "react";
import logo from '../images/Stockx_logo.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './styles.css'


export default function Navbar(){


    return (
        <>
            <div className="navbar">
                <div className="search">
                    <img src={logo} alt="Logo" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/><input className="searchBar" type="text" placeholder="Search for a shoe"/>
                </div>
                <div className="buttons">
                    <Link to="/login"><button className="button">Log In</button></Link>
                    <Link to="/signup"><button className="button">Sign Up</button></Link>
                </div>
           </div>
        </>
    )
}



