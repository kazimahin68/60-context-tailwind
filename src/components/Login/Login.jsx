/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const {user, loggedIn} = useContext(AuthContext);

    const handleLoggedIn = e =>{
        setError('');
        setSuccess('');
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        loggedIn(email, password)
        .then(() => {
            console.log('Sign In SuccessFully');
            setSuccess('You are successfully logged In')
            form.reset();
        })
        .catch(error =>{
            setError(error.message);
        })
    }


    return (
        <div>
            <form onSubmit={handleLoggedIn} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <p className=' text-emerald-500'>{success}</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;