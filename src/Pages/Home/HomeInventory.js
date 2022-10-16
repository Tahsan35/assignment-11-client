import React from 'react';
import { Link } from 'react-router-dom';

const HomeInventory = ({ perfume }) => {
    const { name, img, price, stock, _id, details, Seller } = perfume;
    return (
        <div>
            <div className=' w-[296px] mx-auto p-2 '>
                <img className='mx-auto' src={img} alt="" />
                <p className='text-lg mb-1'>{name}</p>
                <p>Price:- <span className='font-bold text-lg mb-1' >${price}</span></p>
                <p className='mb-3'>Stock:- {stock}</p>
                <p className='mb-3'>{details.slice(0, 100) + "..."}</p>
                <p>Seller:- {Seller}</p>
                <Link to={`/inventory/${_id}`}>
                    <div className=''>
                        <button className='bg-cyan-600 w-full px-16 text-white py-[4px] my-2'>Update</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HomeInventory;