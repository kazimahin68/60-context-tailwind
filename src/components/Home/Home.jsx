/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>This Is home</h2>
            {user ? <>
            <span>{user.email}</span>
            <span><button>Sign Out</button></span>
            </>
            : 
            <Link to="/login">Login</Link>}
        </div>
    );
};

export default Home;