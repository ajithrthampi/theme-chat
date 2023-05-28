import React, {useContext, useState} from 'react'

import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where
} from 'firebase/firestore';
import {db} from '../firebase';
import {AuthContext} from '../context/AuthContext';
import { BsSearch } from 'react-icons/bs';
import { IoMdCloseCircleOutline} from 'react-icons/io';

const Searchuser = () => {

    const [username, setUsername] = useState("")
    const [user, setUser] = useState("")
    const [err, setErr] = useState(false)
    const {currentUser} = useContext(AuthContext)

    // Search user
    const handleSearch = async () => { // checking with Enter
        const q = query(collection(db, "users"), where("displayName", "==", username))


        try { // Getting searched user data..
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => { // doc.data() is never undefined for query doc snapshots
                setUser(doc.data())
            });
        } catch (error) {
            setErr(true)
        }
    }

    // Press Enter
    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    }

    // click search user
    const handleSelect = async () => { // check whether  the group( chats in firestore) exists, if not create.
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
        console.log(combinedId);
        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (! res.exists()) { // create chat in chat collection
                await setDoc(doc(db, "chats", combinedId), {messages: []});

                // create user chats
                await updateDoc(doc(db, "userChat", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });

                await updateDoc(doc(db, "userChat", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });

            }
        } catch (error) {}
        setUser(null)
        setUsername("")
    }

    const handleClose = () => {
        setUser(null)
    }

    return (<>
        <div className=" mb-3">
            <div className="relative md:mb-4 flex md:w-full w-screen flex-wrap items-stretch px-5 pt-7 pr-4">
                <input type="search" className="relative md:m-0 md:-mr-0.5 block w-[1px] min-w-0 mr-0 flex-auto rounded-xl py-3 md:rounded-md  border border-solid border-neutral-300  bg-transparent bg-clip-padding px-3 md:py-[0.25rem] text-base font-normal leading-[1.6] text-neutrredal-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary" placeholder="Search" aria-label="Search" aria-describedby="button-addon1"
                    value={username}
                    onKeyDown={handleKey}
                    onChange={
                        e => setUsername(e.target.value)
                    }/>

                <div className='hidden md:block' onClick={handleSearch}>
                    <button className=" relative z-[2] flex bg-gradient-to-r bg-[#1e4ce3] text-white   items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg" type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>


        {
            user && <div className='
                                fixed bg-black bg-opacity-25 backdrop-blur-sm
                                md:fle justify-center items-center z-20 md:w-[26%] w-full   
                                '>
                                    <div className='absolut'>
                <div className=' flex items-center p-2 gap-3 bg-gray-400  cursor-pointer mx-1 relative '
                    onClick={handleSelect}>
                    <img className='h-16 w-16 bg-red-400 rounded-full object-cover'
                        src={
                            user.photoURL
                        }
                        alt="sdf"/>
                    <h1 className=' text-sm font-medium'>
                        {
                        user.displayName
                    }</h1>
                </div>
                <h1 className=' absolute top-7 right-9 cursor-pointer' onClick={handleClose}><IoMdCloseCircleOutline size={26}/></h1>
                </div>
            </div>
        }
    </>)
}

export default Searchuser
