import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <div className="header-links">
                <NavLink className={({isActive}) => {
                    return isActive ? "header-link header-link--active" : "header-link";
                }} to="react-note-app/">
                   <p className='header-links-name'>Home</p>
                </NavLink>
                <NavLink className={({isActive}) => {
                    return isActive ? "header-link header-link--active" : "header-link";
                }} to="react-note-app/addnote">
                    <p className='header-links-name'>New note</p>
                </NavLink>
            </div>
            <h1>React note</h1>
        </header>
    );
};

export default Navbar;