import {doc, onSnapshot} from 'firebase/firestore'
import React, {useContext, useEffect, useState} from 'react'
import {db} from '../firebase'
import {ChatContext} from '../context/ChatContext'
import Message from './Message'
import Navbar from './Navbar'
import MobileChatNav from './MobileChatNav'

const Messages = () => {


    const {data} = useContext(ChatContext)
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {


        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
            setLoading(true)
        })
        return() => {
            unSub()
        }
    }, [data])


    return (<>
        <div>
            <div className=''>
             <MobileChatNav/>
             </div>
        {
           
           loading == true ?
          <>

            <div className="absolute top-0 botto pb-14  right-0 left-0 overflow-scroll h-full scrollbar-hide"> 
            {
                messages.map(m => (<>
                    <Message message={m}
                        key={
                            m.id
                        }/>
                </>))
            } </div>
            </>
          :
          <>
          <div className=' bg-red-500'>
          {/* <LazyChatUser/> */}
          </div>
          </>
         }
        </div>
    </>)
}

export default Messages
