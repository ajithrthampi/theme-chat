import React, {useContext} from 'react'
import Messages from './Messages'
import Input from './Input'
import Message from './Message'
import {ChatContext} from '../context/ChatContext'

const Chats = () => {

    const {data} = useContext(ChatContext)

    return (<> {
        data ?. user ?. displayName ? <>
            <div className=' bg-reen-300  text-skin-text_base h-screen bg-rd-400  relative '>
                <div className='bg-skin-fill_Chat_Background absolute h-screen md:h-auto  flex flex-col right-0 -left-28  md:right-5 md:left-5 md:top-5 md:bottom-5 md:rounded-3xl overflow-hidde'>
                    <div className='hidden md:block'>
                    <div className=' flex gap-5 text-xl  p-3 pl-10'>
                        <img className='xl:w-14 xl:h-14 md:h-10 md:w-10 rounded-full object-cover'
                            src={
                                data.user ?. photoURL
                            }
                            alt=""/>
                        <div className='xl:text-md md:textsm'> {
                            data.user ?. displayName
                        }</div>
                    </div>
                    </div>
                    <hr className="h-px my- a md:block hidden bg-skin-fill_line border-0 dark:bg-gray-700"></hr>

                    <div className='relative w-full h-full'>
                        <Messages/>
                    </div>

                    <div>
                        <Input/>
                    </div>
                </div>
            </div>
        </> : <>
            <div className='hidden md:block bg-reen-300  text-white h-screen bg-rd-400  relative  '>
                <div className='bg-skin-fill_Chat_Background absolute flex flex-col justify-center items-center text-skin-text_base right-5 left-5 top-5 bottom-5 rounded-3xl overflow-hidde '>
                Select a chat to start messaging
                </div>
            </div>
        </>
    } </>)
}

export default Chats
