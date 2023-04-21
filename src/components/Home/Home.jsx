/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            <h2>This Is home</h2>
            <p>{user.displayName}</p>
        </div>
    );
};

export default Home;