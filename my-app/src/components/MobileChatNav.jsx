import React, {useContext, useEffect, useState} from 'react'
import {SlArrowLeft} from 'react-icons/sl'
import {ChatContext} from '../context/ChatContext'

const MobileChatNav = () => {

    const [state, setState] = useState("")
    const {data} = useContext(ChatContext)
    const {dispatch} = useContext(ChatContext)

    useEffect(() => {
        if (data) {
            setState(data)
        }
    }, [data])

    const handleClose = () => {
        dispatch({type: "TOGLE_MODAL"})
    }


    return (<div className='absolute left-0 right-0 z-50'>
        <div className='md:hidden w-full bg-[#161717] py-2 '>
            <div className=' flex  gap-7 px-5 h-full'>
                <div className='text-lg  flex justify-center items-center'
                    onClick={handleClose}>
                    <SlArrowLeft/>
                </div>
                <div className='flex justify-start items-center gap-3'>
                    <img className='h-10 w-10 bg-yellow-500 rounded-full object-cover'
                        src={
                            data.user ?. photoURL
                        }
                        alt="sdf"/>
                    <h1 className=' pt-1 text-md font-medium '> {
                        data.user ?. displayName
                    }</h1>
                </div>
            </div>
        </div>
    </div>)
}

export default MobileChatNav
