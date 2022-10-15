
import React from 'react';
import CustomLink from '../Shared/CustomLink';

const Navbar = () => {
    return (
        <div className='flex items-center h-14 px-6 justify-between bg-slate-600 text-white  relative z-50'>
            <div>
                <span className='cursor-pointer'>Perfume wareHouse</span>
            </div>
            <div className='flex gap-6 items-center hidden md:flex'>
                <CustomLink to='/inventories'>Inventories</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/manageitems'>Manage Items</CustomLink>
                <CustomLink to='/additems'>Add Items</CustomLink>
                <CustomLink to='/myitems'>My Items</CustomLink>
                <CustomLink to='/login'>Login</CustomLink>
            </div>
        </div>
    );
};

export default Navbar;