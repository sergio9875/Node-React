import React from 'react';
import './Header.css';
import s from "../Navbar/Navbar.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            {/*<img src="https://ssl.mlse.digital/leafs/sweater/img/ml_logo.png" alt=" " />*/}

            <button className="btn peach-gradient">Home</button>
            <NavLink to="/login">
                <button className="btn purple-gradient">Login</button>
            </NavLink>
            <NavLink to="/registration">
            <button className="btn blue-gradient">Registration</button>
            </NavLink>
            <button className="btn aqua-gradient">Data DB</button>


        </header>);
}

export default Header;