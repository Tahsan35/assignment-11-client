import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {

    const [agree, setAgree] = useState(false);
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [confirmationPassword, setConfirmationPassword] = useState({ value: "", error: "" });
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }
    if (user1) {
        navigate('/home');
    }
    const handleEmail = (event) => {
        const emailInput = event.target.value;
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" })
        } else {
            setEmail({ value: "", error: "Please provide a Valid Email" })
        }
    }

    const handlePassword = (event) => {
        const passwordInput = event.target.value;
        if (passwordInput.length < 7) {
            setPassword({ value: "", error: "Password is too short" })
        } else {
            setPassword({ value: passwordInput, error: "" })
        }
    }

    const handleConfirmPassword = (event) => {
        const confirmPasswordInput = event.target.value;
        if (confirmPasswordInput !== password.value) {
            setConfirmationPassword({ value: "", error: "Password Mismatch" })
        } else {
            setConfirmationPassword({ value: confirmPasswordInput, error: "" })
        }
    }

    const handleSubmit = () => {
        createUserWithEmailAndPassword(email.value, password.value);
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    return (
        <div>
            <div className='flex justify-center items-center h-[92vh]'>
                <div className='w-[250px] sm:w-[500px] shadow-xl p-4 '>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h1 className='text-center text-xl mb-8 text-slate-400'>Create An Account</h1>
                        <div className='mb-8'>
                            <input onChange={handleEmail} className='w-full px-2 py-[5px] bg-gray-100 border-0' placeholder='Email' type="email" name="email" id="" />
                            {email.error && (
                                <p className='text-red-600 text-sm'>{email.error}</p>
                            )}
                        </div>
                        <div className='mb-8'>
                            <input onChange={handlePassword} className='w-full px-2 py-[5px] bg-gray-100 border-0' placeholder='Password' type="password" name="" id="" />
                            {password.error && (
                                <p className='text-red-600 text-sm'>{password.error}</p>
                            )}
                        </div>
                        <div className='mb-8'>
                            <input onChange={handleConfirmPassword} className='w-full px-2 py-[5px] bg-gray-100 border-0' placeholder='Confirm Password' type="password" name="" id="" />
                            {confirmationPassword.error && (
                                <p className='text-red-600 text-sm'>{confirmationPassword.error}</p>
                            )}
                        </div>
                        <div className='mb-2'>
                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                            <label className={agree ? "px-2 text-blue-600" : "px-2 text-red-700"} htmlFor="terms">Accept Terms and Conditions</label>
                        </div>
                        <button disabled={!agree} onClick={handleSubmit} className='w-full bg-cyan-600 py-2 text-white' type='submit'>Signup</button>
                        <p className='text-sm text-right'>Already have an Account ? <span><Link className='text-cyan-600' to='/login'>Login</Link></span></p>
                        <div className='my-8 flex justify-between items-center'>
                            <span className='w-[186px]'><hr /></span>
                            <span className='text-slate-400'>or</span>
                            <span className='w-[186px]'><hr /></span>
                        </div>
                        <button onClick={handleGoogleSignIn} className='border rounded text-cyan-600 border-cyan-600 w-full flex items-center justify-around p-1'><FcGoogle className='text-4xl' /><span className='text-lg'>Continue with google</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;