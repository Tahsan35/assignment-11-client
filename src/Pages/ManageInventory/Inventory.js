import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [number, setNumber] = useState('');
    const { name, img, price, stock, _id } = product;
    const navigate = useNavigate();
    const handleManageInventories = () => {
        navigate('/inventories');
    }
    useEffect(() => {
        const url = `https://assignment-11-server.vercel.app/perfume/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id]);
    const handleNumber = (event) => {
        setNumber(event.target.value);
    }
    const updateStock = (stock) => {
        const currentValue = parseInt(stock);
        const newValue = currentValue - 1
        return newValue;
    };
    const handleDelivered = (newStock) => {
        const stock = updateStock(newStock);
        const url = `https://assignment-11-server.vercel.app/perfume/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ stock: stock })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                window.location.reload();
            })
    };
    const handleRestock = (stocks) => {
        let count = parseInt(stocks);
        const stock = parseInt(number) + count;
        const url = `https://assignment-11-server.vercel.app/perfume/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ stock: stock })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                window.location.reload();
            });
    };
    return (
        <div className='py-20'>
            <div className='flex justify-center items-center '>
                <div className='w-[250px] sm:w-[500px] mx-auto shadow-xl p-2 sm:flex  justify-center items-center'>
                    <img className='w-[200px]' src={img} alt="" />
                    <div className='mx-auto'>
                        <p>id: {_id}</p>
                        <p>{name}</p>
                        <p>Price: <span className='font-bold text-lg'>${price}</span></p>
                        <p>Stock: {stock}</p>
                        <button onClick={() => handleDelivered(stock)} className='bg-cyan-600 text-white mt-2 px-1 py-[3px] rounded'>Delivered</button>
                        <div className='my-4'>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className='flex mx-auto'>
                                    <input onChange={handleNumber} className='w-[150px] px-2 py-2 bg-slate-100 outline-none' type="number" name="number" id="" placeholder='Enter Amount' />
                                    <button onClick={() => handleRestock(stock)} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                                        className="inline-block px-2 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >Restock</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-6'>
                <button onClick={handleManageInventories} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                    className="inline-block px-2 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >Manage Inventory
                </button>
            </div>
        </div>
    );
};

export default Inventory;