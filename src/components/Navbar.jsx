'use client'

import Logo_0 from '@/assets/asset 0.png';
import Logo_1 from '@/assets/asset 1.svg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Navbar = () => {
    
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const handleMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    }
    return (
        <div >
                {/* Navbar */}
                <nav className="flex justify-between items-center p-3 ">
                    {/* Logo */}
                    <a href="#" id='brand' className="flex gap-2 items-center flex-1">
                        <Image src={Logo_0} alt="Logo" className="object-cover max-w-12 max-h-12" />
                        <span className="text-lg font-semibold font-display">To Desktop</span>
                    </a>
                    {/* nav-menu */}
                    <div id="nav-menu" className='hidden lg:flex gap-12 items-center'>
                        <a href="#" className='font-medium hover:text-primary'>Pricing</a>
                        <a href="#" className='font-medium hover:text-primary'>Docs</a>
                        <a href="#" className='font-medium hover:text-primary'>Changelog</a>
                        <a href="#" className='font-medium hover:text-primary'>Blogs</a>
                        <a href="#" className='font-medium hover:text-primary'>Login</a>
                    </div>

                    {/* electron developers button */}
                    <div className="hidden lg:flex flex-1 justify-end">
                    <button className='flex items-center gap-2 border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600'>
                        <Image src={Logo_1} alt='Logo 1' />
                        <span>Electron Developers</span>
                        <FontAwesomeIcon icon={faArrowRight} style={{ color: "gray" }} />
                    </button>
                    </div>

                    {/* Menu-button */}
                    <button className='p-2 lg:hidden' onClick={handleMenu} >
                        <FontAwesomeIcon icon={faBars} style={{ color: "gray" }} />
                    </button>

                    {/* Side Menu */}
                    {
                        isSideMenuOpen && (<div className='fixed md:hidden inset-0 p-3 bg-white '>
                            {/* Header */}
                            <div id='nav-bar' className='flex justify-between'>
                                {/* Logo */}
                                <a href="#" id='brand' className="flex gap-2 items-center">
                                    <Image src={Logo_0} alt="Logo" className="object-cover max-w-12 max-h-12" />
                                    <span className="text-lg font-semibold font-display">To Desktop</span>
                                </a>
                                {/* Cross-button */}
                                <button className='p-2' onClick={handleMenu} >
                                    <FontAwesomeIcon icon={faXmark} style={{ color: "gray" }} />
                                </button>
                            </div>
                            {/* Menu-items */}
                            <div className='mt-6'>
                                <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Pricing</a>
                                <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Docs</a>
                                <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Changelog</a>
                                <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Blogs</a>
                                <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Login</a>
                            </div>
                            {/* breaker */}
                            <div className='h-[1px] bg-gray-300'></div>
                            {/* electron developers button */}
                            <button className='mt-6 w-full flex items-center gap-2 px-6 py-4 rounded-lg hover:bg-gray-300'>
                                <Image src={Logo_1} alt='Logo 1' />
                                <span>Electron Developers</span>
                                
                            </button>
                        </div>)
                    }

                </nav>
            </div>
    );
};

export default Navbar;