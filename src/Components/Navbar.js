import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Cook Book</h1>
            <div className="search">
                <label>Search: </label>
                <input placeholder="Find a recipe"></input>
            </div>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">Add a new dish</Link>
            </div>
        </nav>
    );
};

export default Navbar;