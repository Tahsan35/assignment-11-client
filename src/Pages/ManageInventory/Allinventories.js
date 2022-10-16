import React from 'react';
import { BsTrash } from 'react-icons/bs';
import usePerfume from '../Hooks/usePerfume';

const Allinventories = ({ perfume }) => {
    const { name, img, price, stock, _id } = perfume;
    const [perfumes, setPerfumes] = usePerfume();

    const handleDeleteItem = (id) => {

        const proceed = window.confirm('Are you Sure');
        if (proceed) {
            const url = `https://ancient-bayou-60727.herokuapp.com/perfume/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = perfumes.filter(item => item._id !== id);
                    setPerfumes(remaining);
                    window.location.reload();
                })
        }
    }

    return (
        <div className='w-[280px] sm:w-[450px]  mx-auto border mb-4'>
            <div className='flex items-center gap-8 p-2 relative'>
                <img className='w-[50px]' src={img} alt="" />
                <div className='flex  items-center '>
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

export default Allinventories;