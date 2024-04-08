
import Logo_0 from '@/assets/asset 0.png';
import Logo_1 from '@/assets/asset 1.svg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'

import Navbar from '@/components/Navbar';

const HOME = () => {
    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <div className='min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent'>
                {/* Hero Container */}
                <div className='max-w-4xl mx-auto px-6 pb-32 pt-6 flex flex-col sm:items-center sm:text-center'>
                    {/* version-hovering-text */}
                    <div className='flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group'>
                        <div className='h-3 w-3 bg-yellow-500 rounded-full border border-yellow-700'></div>
                        <p className='font-display font-medium text-yellow-600'>v0.21.1: <span className='text-yellow-800'>Find-in-page bug fixes</span></p>
                        <FontAwesomeIcon icon={faArrowRight} style={{ color: "goldenrod"}} className='group-hover:translate-x-1 transition duration-300' />    
                    </div>
                    {/* Heading 1 */}
                    <h1 className='text-4xl font-semibold leading-snug mt-4 sm:text-[70px] sm:leading-tight'>Web app to desktop app in minutes</h1>
                    {/* para */}
                    <p className='text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800'>Take your web app codebase and transform it to a cross platform desktop app with native functionality.</p>
                    {/* buttons */}
                    <div className='mt-12 flex flex-col gap-4 sm:flex-row'>
                        <button className='px-8 py-3 font-semibold text-white rounded-lg bg-primary shadow-sm hover:bg-opacity-90'>Download now</button>
                        <button className='px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800'>Read Docs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HOME;