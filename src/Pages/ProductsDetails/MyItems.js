import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemsDetails from '../ProductsDetails/myItemsDetails';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getUploadITem = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/upload?email=${email}`;
            const { data } = await axios.get(url);
            setProducts(data);
        }
        getUploadITem();
    }, [products]);


    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you Sure');
        if (proceed) {
            const url = `http://localhost:5000/upload/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(item => item._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className='my-16'>
            {
                products.map(details => <MyItemsDetails
                    key={details._id}
                    details={details}
                    handleDeleteItem={handleDeleteItem}
                ></MyItemsDetails>)
            }
        </div>
    );
};

export default MyItems;