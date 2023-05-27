import React from 'react'
import {FcWiFiLogo} from 'react-icons/fc'
import Searchuser from './Searchuser'
import ChatUsers from './ChatUsers'
import Navbar from './Navbar'

const Sidebar = () => {
    return (
        <>

            <div className=' bg-rd-400 h-screen text-white '>
                <div className='md:hidden'>
                    <Navbar/>
                </div>
                <div className='hidden md:block'>
                    <div className='p-7 flex justify-start gap-3 items-center '>
                        <div className='xl:text-6xl md:text-4xl'>
                            <FcWiFiLogo/>
                        </div>
                        <h1 className='xl:text-3xl md:text-xl font-perifpp font-extrabold'>Brainwave</h1>
                    </div>
                </div>

                {/* Search user */}

                <div className='md:pt-0 pt-10'>
                    <Searchuser/>
                </div>
                <div className=''>
                    <ChatUsers/>
                </div>
            </div>


        </>

    )
}

export default Sidebar
