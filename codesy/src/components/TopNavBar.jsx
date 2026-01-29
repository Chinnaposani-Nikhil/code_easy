import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNavBar.css';

const TopNavBar = () => {
    return (
        <header className="top-nav-bar">
            <div className="logo-container">
                <h1 className="company-logo">Codesy</h1>
            </div>
            <nav className="top-nav-links">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                    About Company
                </NavLink>
            </nav>
        </header>
    );
};

export default TopNavBar;
