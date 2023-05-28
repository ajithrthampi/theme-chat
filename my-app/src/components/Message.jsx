import React, {useContext, useEffect, useRef} from 'react'
import {AuthContext} from '../context/AuthContext'
import {ChatContext} from '../context/ChatContext'
import {MessageContext} from '../context/MessageContext'

const Message = ({message}) => {

    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)
    



    const ref = useRef()

    useEffect(() => {
        ref.current ?. scrollIntoView({behavior: "smooth"})
    }, [message])

    return (<>
        <div className=' d:block z-0 '
                ref={ref}
                >
                   
                <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col   ">
                    
                    <div id="messages" className=" md:pt-10  p-2  scrollbar-hide flex flex-col   overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

                        {
                            message.senderId === currentUser.uid ?
                        <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y- text-sm max-w-xs mx-2 order-1 items-end  gap-3 ">
                                {/* <div className=' flex flex-col gap-3 '> */}
                                    {
                                    message.text && <span className="px-5 py-2   inline-block rounded-tr-xl rounded-tl-xl font-perifpp rounded-bl-xl bg-[#1e4ce3] text-white ">
                                        {
                                        message ?. text
                                    }</span>
                                }

                                    {
                                    message.img && <div>
                                        <img className='w-60 h-60 object-cover rounded-md'
                                            src={
                                                message.img
                                            }
                                            alt=""/>
                                    </div>
                                } </div>
                            {/* </div> */}
                            {}
                            <img className="w-14 h-14 rounded-full order-1 object-cover hidden md:block"
                                src={
                                    // data.user.photoURL
                                    currentUser.photoURL
                                }
                                alt="all profile"/>
                        </div>
                    </div>
                        : 
                            <div className="chat-message">
                            <div className="flex items-end">
                                <div className="flex flex-col space-y- text-sm max-w-xs mx-2 order-2 items-start gap-3 ">
                                    {/* <div className='flex flex-col     '> */}
                                        {
                                        message.text && <span className="px-4  py-2 rounded-lg inline-block rounded-bl-none bg-white font-perifpp text-gray-600">
                                            {
                                            message ?. text
                                        }</span>
                                    }

                                        {
                                        message.img && <div >
                                            <img className='md:w-60 w-44 object-cover'
                                                src={
                                                    message?.img
                                                }
                                                alt=""/>
                                        </div>
                                    } 
                                    {/* </div> */}
                                </div>
                                {
                                message && <img className="w-14 h-14 rounded-full object-cover order-1 hidden md:block"
                                    src={
                                        // currentUser.photoURL
                                        data.user.photoURL
                                    }
                                    alt="My profile"/>
                                }
                             </div>
                        </div> 
                        
                    } </div>
                </div>
            </div>
    </>)
}

export default Message
