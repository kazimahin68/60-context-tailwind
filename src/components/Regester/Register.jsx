/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {user, createUser, updateName, setError, error, setSuccess, success} = useContext(AuthContext);
    const handleRegister = e => {
        setError('');
        setSuccess('');
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);


        // Validation
        const pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (!pattern.test(password)) {
            setError('Your password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.');
            e.target.reset();
            return;
        }

        createUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                // console.log(registeredUser);
                setSuccess('You are successfully registered')
                e.target.reset()
            })
            .catch(error => {
                setError(error.message);
                e.target.reset();
            });

        // updateName(name)
        //     .then(() => { })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }


    return (
        <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Choose Your Password" className="input input-bordered" required />
                            <p className='text-red-500'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className='text-emerald-500'>{success}</p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;