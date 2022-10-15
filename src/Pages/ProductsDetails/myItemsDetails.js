import React from 'react';
import { BsTrash } from 'react-icons/bs';


const myItemsDetails = ({ details, handleDeleteItem }) => {
    const { img, name, price, stock, _id } = details;

    return (
        <div>
            <div className="w-[280px] sm:w-[450px] mx-auto border mb-4">
                <div className='flex gap-2 items-center relative'>
                    <img className='w-[80px] p-3' src={img} alt="" />
                    <div>
                        <p>{name}</p>
                        <p>Price:- ${price}</p>
                        <p>Stock:- {stock}</p>
                    </div>
                    <div className='absolute right-4 '>
                        <button onClick={() => handleDeleteItem(_id)} className='flex items-center justify-center h-[35px] bg-red-200 w-[35px] rounded-full text-red-600'><BsTrash className='text-xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default myItemsDetails;