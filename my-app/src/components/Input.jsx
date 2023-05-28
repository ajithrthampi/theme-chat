import React, {useContext, useState} from 'react'
import {RiSendPlaneLine} from 'react-icons/ri'
import {AuthContext} from '../context/AuthContext'
import {ChatContext} from '../context/ChatContext'
import {db, storage} from '../firebase'
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import {
    Timestamp,
    arrayUnion,
    doc,
    serverTimestamp,
    updateDoc
} from 'firebase/firestore'
import {v4 as uuid} from 'uuid'
import {FcAddImage} from 'react-icons/fc'


const Input = () => {

    const [text, setText] = useState("")
    const [img, setImg] = useState(null)
    const [profilePic, setProfilePic] = useState('')

    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)

    const handleSend = async () => {

        if (img) {
          
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on('state_changed', (snapshot) => {}, (error) => {}, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateDoc(doc(db, "chats", data.chatId), {
                        messages: arrayUnion(
                            {
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL
                            }
                        )
                    });
                });
            })
  setText("")
        } else {
          setText("")
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion(
                    {id: uuid(), text, senderId: currentUser.uid, date: Timestamp.now()}
                )
            })
           
        }

        await updateDoc(doc(db, "userChat", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId + ".date"]: serverTimestamp()
        });
        await updateDoc(doc(db, "userChat", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId + ".date"]: serverTimestamp()
        });
        // setText("")
        setImg(null)
        setProfilePic("")
    }

    const handleImage = (e) => {
        const Image = e.target.files[0]
        // console.log("Added dimage message",e.target.files[0]);

        setImg(e.target.files[0])
        setProfilePic(URL.createObjectURL(e.target.files[0]))
    }
    
    return (<>
        <div>
            <input className='absolute md:bottom-5 bottom-0 md:right-8 md:left-8 right-0 left-0 pl-5 rounded-lg text-skin-text_base  bg-skin-fill_Background py-4 border border-y- order-x-2 border-gray-600' placeholder='Type something...' type="text"
                onChange={
                    e => setText(e.target.value)
                }
                value={text}/>
            <div className='absolute md:bottom-[26px] md:right-14 right-7 bottom-1 bg-gray-500 bg-opacity-10 hover:opacity-50   rounded-full w-12 h-12 flex justify-center items-center'>
                <button className=' cursor-pointer text-skin-text_base text-2xl hover:text-skin-text_base'  onClick={handleSend}> 
                    <RiSendPlaneLine/>
                </button>
            </div>

            <input className='hidden' type="file" id="file"
                onChange={
                    // e => setImg(e.target.files[0])
                    handleImage
                }/>
            <label htmlFor="file" className='cursor-pointer text-3xl absolute  md:right-32 right-2 bottom-4 md:bottom-8  '> 
            {
                profilePic && profilePic ? <>
                    <img className='w-10 h-10 flex justify-center items-center rounded-full object-cover'
                        src={profilePic}
                        alt=""/>
                </> : <>
                    <FcAddImage/>
                </>
            } </label>

        </div>
    </>)
}

export default Input
