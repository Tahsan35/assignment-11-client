import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer className="text-center bg-gray-900 text-white">
                <div className="px-6 pt-6">
                    <div className="flex justify-center mx-auto my-8 gap-8 text-2xl items-center text-center">
                        <FaFacebookF className='cursor-pointer' />
                        <AiFillGithub className='cursor-pointer' />
                        <AiOutlineGoogle className='cursor-pointer' />
                        <AiOutlineInstagram className='cursor-pointer' />
                        <AiOutlineTwitter className='cursor-pointer' />
                        <AiOutlineTwitter className='cursor-pointer' />
                    </div>
                </div>
                <div className="text-center p-4">
                    © 2022 Copyright: Perfume wareHouse
                </div>
            </footer>
        </div>
    );
};

export default Footer;