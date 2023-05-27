import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chats = () => {
    return (
        <>
            <div className='hidden md:block bg-reen-300  text-white h-screen bg-rd-400  relative '>
                <div className='bg-[#2A2A2A] absolute  right-5 left-5 top-5 bottom-5 rounded-3xl overflow-hidde'>
                    <div className='flex gap-5 text-xl  p-3 pl-10'>
                        <img className='xl:w-14 xl:h-14 md:h-10 md:w-10 rounded-full object-cover' src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                        <div className='xl:text-md md:textsm'>Ajith R Thampi</div>
                    </div>
                    <hr className="h-px my- a  bg-gray-200 border-0 dark:bg-gray-700"></hr>

                    <div>
                        <Messages/>
                    </div>

                    <div>
                        <Input/>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Chats
