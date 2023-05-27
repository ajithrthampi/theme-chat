import React from 'react'
import { FcWiFiLogo } from 'react-icons/fc'

const Navbar = () => {
    return (
        <div className='bg-[#2A2A2A]  w-screen absolute right-0 left-0  top-0'>
            <div className='flex justify-between items-center p-2'>
                <div className='text-4xl '>
                    <FcWiFiLogo/>
                </div>
                <div>
                    <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
