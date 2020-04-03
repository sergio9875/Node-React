import React from 'react';
import './Header.css';

import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            {/*<img src="https://ssl.mlse.digital/leafs/sweater/img/ml_logo.png" alt=" " />*/}
            <NavLink to="/football">
                <button className="btn peach-gradient">Football</button>
            </NavLink>

            <NavLink to="/login">
                <button className="btn purple-gradient">Login</button>
            </NavLink>

            <NavLink to="/registration">
                <button className="btn blue-gradient">Registration</button>
            </NavLink>
            <NavLink to="/">
                <button className="btn aqua-gradient">Data</button>
            </NavLink>


        </header>);
}

export default Header;