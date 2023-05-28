import React from 'react'
import {FcWiFiLogo} from 'react-icons/fc'
import Searchuser from './Searchuser'
import ChatUsers from './ChatUsers'
import Navbar from './Navbar'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Sidebar = () => {
    return (
        <>

            <div className=' bg-rd-400 h-screen text-white '>
                <div className='md:hidden'>
                    <Navbar/>
                </div>
                <div className='hidden md:block'>
                    <div className='p-7 flex justify-between gap-3 items-center '>
                        <div className='lg:text-xl md:text-sm font-perifpp text-skin-text_base'>
                            Chat <span className='text-[#1e4ce3]'>Book</span>
                        </div>
                        {/* <h1 className='md:text-[16px] text-[10px] font-perifpp font-extrabold'>Chat <span>Book</span></h1> */}
                        <button className='px-3 font-perifpp text-center text-xs py-1 bg-[#1e4ce3] rounded-xl' onClick={() => signOut(auth)}>Logout</button>  
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
