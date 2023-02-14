import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useAPI } from './apiContext';

const Navbar = () => {
    const { setQuery } = useAPI()

    return (
        <nav className="navbar">
            <h1>Cook Book</h1>
            <div className="search">
                <label>Search: </label>
                <input placeholder="Find a recipe" onChange={(e) => setQuery(e.target.value)}></input>
            </div>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">Add a new dish</Link>
            </div>
        </nav>
    );
};

export default Navbar;