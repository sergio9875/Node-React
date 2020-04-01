import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/football" activeClassName={s.activeLink}>Football</NavLink></div>
            <div className={s.item}>
                <NavLink to="/basketball" activeClassName={s.activeLink}>Basketball</NavLink></div>
        </nav >);
}

export default Navbar;