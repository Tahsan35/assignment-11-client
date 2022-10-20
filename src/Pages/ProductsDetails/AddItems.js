import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItems = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [img, setImg] = useState('');
    const [user] = useAuthState(auth);
    const email = user?.email;

    const handleName = event => {
        setName(event.target.value);
    }
    const handlePrice = event => {
        setPrice(event.target.value);
    }
    const handleStock = event => {
        setStock(event.target.value);
    }
    const handleImg = event => {
        setImg(event.target.value);
    }
    const handleSubmit = (event) => {
        const url = `http://localhost:5000/upload`;
        fetch(url, {
            method: 'POST',
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name, price, stock, img, email
            }),
        })
            .then((response) => response.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='w-[250px] sm:w-[450px] mx-auto border p-4 my-16'>
            <h1 className='text-center mb-4'>Add new Item</h1>
            <form onSubmit={e => e.preventDefault()}>
                <input onChange={handleName} className='w-full mb-8 bg-slate-100 px-1 py-[4px]' type="text" name="name" id="" placeholder='Name' />
                <input onChange={handlePrice} className='w-full mb-8 bg-slate-100 px-1 py-[4px]' type="number" name="price" placeholder='Price' id="" />
                <input onChange={handleStock} className='w-full mb-8 bg-slate-100 px-1 py-[4px]' type="number" name="stock" placeholder='Stock' id="" />
                <input onChange={handleImg} className='w-full mb-8 bg-slate-100 px-1 py-[4px]' type="text" name="Img" placeholder='Img URL' id="" />
                <div className='flex justify-center'>
                    <button onClick={handleSubmit} className='bg-cyan-600 px-10 rounded py-1 text-white' >Add new Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;