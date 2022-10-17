import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const Login = () => {

    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let location = useLocation();

    const [signInWithEmailAndPassword, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";
    let errorItem;
    if (error) {
        errorItem = <p className='text-red-600'>Error: {error?.message}</p>
    };
    if (user) {
        const url = 'https://ancient-bayou-60727.herokuapp.com/login';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                localStorage.setItem('accessToken', data.token)
                navigate(from, { replace: true });
            });

    };
    if (user1) {
        navigate(from, { replace: true });
    }

    // handle Email
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    // handle Password
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(email, password);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    const handleForgottenPassword = async () => {
        await sendPasswordResetEmail(email);
        toast('Send email for Forgotten Password ');
    }
    return (
        <div className='flex justify-center items-center h-[92vh]'>
            <div className='w-[250px] sm:w-[500px] shadow-xl p-4 '>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h1 className='text-center text-xl mb-8 text-slate-400'>Log In</h1>
                    <div className='mb-8'>
                        <input onChange={handleEmail} className='w-full px-2 py-[5px] bg-gray-100 border-0' placeholder='Email' type="email" name="email" id="" />
                    </div>
                    <div className='mb-8'>
                        <input onChange={handlePassword} className='w-full px-2 py-[5px] bg-gray-100 border-0' placeholder='Password' type="password" name="" id="" />
                    </div>
                    {errorItem}
                    <button onClick={handleLogin} className='w-full bg-cyan-600 py-2 text-white' type='submit'>Login</button>

                    <div className='flex flex-col sm:flex-row justify-between items-center mt-2'>
                        <p className='text-sm '>Create an Account ! <span><Link className='text-cyan-600' to='/signup'>Sign up</Link></span></p>
                        <button onClick={handleForgottenPassword} className='text-red-600 text-sm '>Forgotten Password?</button>
                    </div>

                    <div className='my-8 flex justify-between items-center'>
                        <span className='w-[186px]'><hr /></span>
                        <span className='text-slate-800'>or</span>
                        <span className='w-[186px]'><hr /></span>
                    </div>
                    <button onClick={handleGoogleSignIn} className='border rounded text-cyan-600 border-cyan-600 w-full flex items-center justify-around p-1'><FcGoogle className='text-4xl' /><span className='text-lg'>Continue with google</span></button>
                </form>
            </div>
        </div>
    );
};

export default Login;