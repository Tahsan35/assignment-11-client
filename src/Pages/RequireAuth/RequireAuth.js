import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';
import { toast } from 'react-toastify';


function RequireAuth({ children }) {
    let [user, loading] = useAuthState(auth);
    let location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(auth);
    if (loading) {
        return <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return (
            <div className='flex justify-center items-center h-[93vh]'>
                <div>
                    <p className='text-blue-600 text-lg mb-4'>Verify your Email</p>
                    <button className='bg-cyan-600 text-white px-4 py-[4px] rounded'
                        onClick={async () => {
                            await sendEmailVerification();
                            toast('Send Email');
                        }}
                    >Verify Email</button>
                </div>
            </div>
        )
    }
    return children;
}
export default RequireAuth;