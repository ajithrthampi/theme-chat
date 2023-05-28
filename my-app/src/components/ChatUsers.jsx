import React, {useContext, useEffect, useState} from 'react'
import {BsChevronDown, BsFillSunFill} from 'react-icons/bs'
import {CiDark} from 'react-icons/ci'
import {useNavigate} from 'react-router-dom'
import {MessageContext} from '../context/MessageContext'
import {AuthContext} from '../context/AuthContext'
import {ChatContext} from '../context/ChatContext'
import {doc, onSnapshot} from 'firebase/firestore'
import {db} from '../firebase'
import moment from 'moment'
import { ThemeContext } from '../context/ThemeContext'


const ChatUsers = () => {
    
    const [theme, setTheme] = useState("")
    

    const [chats, setChats] = useState([])
    const {currentUser} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [date, setDate] = useState([])
    const {dispatch} = useContext(ChatContext)
    const {dispatch1} = useContext(MessageContext)
    const { value, setValue} = useContext(ThemeContext)

    // console.log("value",value);

    const navigate = useNavigate()

    useEffect(() => {
        const getChat = () => {

            const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
                setChats(doc.data())
                setDate(doc.data())
                setLoading(true)

            });
            return() => {
                unsub();
            }
        }
        currentUser.uid && getChat()

    }, [currentUser.uid])

    // click on user to chat
    const handleSelect = (u) => {
        dispatch({type: "CHANGE_USER", payload: u})
        // navigate("/chat")
        // dispatch({type: "TOGLE_MODAL", payload: "defaultModal"})
    }

    const options = [
        {
            icons: "sunny",
            text: 'light'
        },
        {
            icons: "moon",
            text: 'dark'
        },
    ]

    useEffect(() => {
        switch (theme){
            case 'dark':
            //   element.classList.add('dark')
                localStorage.setItem("theme", "dark")
              break;
            case 'light':
                // element.classList.add('dark')
                localStorage.setItem("theme", "light")

            default:
                break;
        }
    
    },[theme])

    const selectTheme = (e) => {
        setTheme(e);
        setLoading(true)
    }


    useEffect(() => {
        setTimeout(() => {
         const themeData = localStorage.getItem("theme")
          setValue(themeData)
        },1000)
        // setTheme(theme)
        // console.log("theme-data",themeData);
    },[theme])

    return (<>
        <div className=''>
            <div className='flex flex-col gap-6'>
                <div className='hidden md:block'>
                    <h1 className=' uppercase text-sm text-gray-600 font-perifpp flex items-center gap-3 p-3'>
                        <div>
                            <BsChevronDown/>
                        </div>
                        Messages
                    </h1>
                </div>

                <div className='flex   flex-col w-screen md:w-auto gap-6 overflow-y-scroll absolute md:top-64  top-32 md:bottom-20 bottom-0 no-scrollbar  right-0 md:left-6 left-0 '> {
                    Object.entries(chats) ?. sort((a, b) => b[1].date - a[1].date).map(chat => (<div className=' flex justify-between items-center  px-4 md:px-0'
                        key={
                            chats[0]
                        }
                        onClick={
                            () => handleSelect(chat[1].userInfo)
                    }>
                        <div className='flex justify-between r gap-5 '>
                            <img className='xl:w-12 xl:h-12 md:w-10 md:h-10 w-12 h-12 object-cover rounded-full'
                                src={
                                    chat[1] ?. userInfo ?. photoURL
                                }
                                alt=""/>
                            <div className='flex flex-col  '>
                                <h4 className='font-perifpp xl:text-sm md:text-xs text-xs text-skin-text_base'> {
                                    chat[1] ?. userInfo ?. displayName
                                }</h4>
                                <p className='text-xs text-gray-600 font-perifpp  '> {
                                    chat[1] ?. lastMessage ?. text
                                }</p>
                            </div>
                        </div>
                        <p className='xl:text-sm text-xs  font-perifpp text-gray-400 '> {
                            moment(chat[1].date ?. toDate()).fromNow()
                        }</p>
                    </div>))
                } </div>


                <div>
                    <div className='hidden md:block absolute bottom-2 left-0  w-full  bg-rd-600 px-8 pb-3'> 
                   
                        <div className='flex items-center duration-100 rounded  '>
                        <label className='font-perifpp text-sm text-skin-text_base'>Select Theme :</label>
                            {
                                options?.map((opt) => (
                                  <button key={opt.text} 
                                  onClick={()=> selectTheme(opt.text)}
                                  className={`bg-slate-700 w-8 h-8 leading-9 text-xl rounded-lg m-1  ${
                                    theme === opt.text && "text-sky-600"
                                  } `}>
                                    <ion-icon name={opt.icons}></ion-icon>
                                  </button>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default ChatUsers
