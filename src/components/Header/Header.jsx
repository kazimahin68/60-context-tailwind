/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="navbar rounded-lg bg-indigo-500">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
               {user && <Link to="/profile" className="btn btn-ghost normal-case text-xl">Profile</Link>}
                {user ? <>
                    <span>{user.email}</span>
                    <span><button onClick={handleSignOut}>Sign Out</button></span>
                </>
                    :
                    <Link to="/login">Login</Link>}
            </div>
        </div>
    );
};

export default Header;