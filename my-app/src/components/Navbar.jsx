import React, { useContext, useState } from 'react'
import { FcWiFiLogo } from 'react-icons/fc'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import {AiFillCaretDown} from 'react-icons/ai'

const Navbar = () => {

    const {currentUser} = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => { // signOut(auth)
        setShowModal(!showModal)
    }


    return (
        <>
        <div className='bg-[#2A2A2A] md:hidden  w-screen absolute right-0 left-0  top-0'>
            <div className='flex justify-between items-center p-2'>
                <div className='text-4xl ' >
                    <FcWiFiLogo/>
                </div>
                <div className='flex gap-7'>
                    <img className='w-10 h-10 rounded-full object-cover' src={
                            currentUser?. photoURL
                        } alt="" />
 <button className='text-white'
                        // onClick={() => signOut(auth)}
                        // onClick={handleModal}
                        onClick={handleModal}>
                        <AiFillCaretDown/>
                    </button>


                </div>
                               {
            showModal && showModal ? <>
                <div className='bg-yellow-500 absolute right-2  top-[65px] z-50 rounded-md transition-all duration-500 ease-out'>
                    <div className='flex justify-center py-2 px-10'>
                        <button className=' text-white font-perifpp px-5 rounded-xl py-1 hover:scale-110 duration-300'   >
                            <h1 onClick={() => signOut(auth)}>Logout</h1>
                        </button>
                    </div>
                </div>
            </> : <></>
        } 
            </div>
        </div>

       
        </>
    )
}

export default Navbar
