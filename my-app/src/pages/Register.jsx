import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { auth, db, storage } from '../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { FcAddImage } from 'react-icons/fc'

const Register = () => {

    const [err, setErr] = useState(false)
    const [show, setShow] = useState(false)
    const [profilePic, setProfilePic] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        // console.log("Image", file);
      
        

        // Create User with email and password
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            // Upload Image
            const storageRef = ref(storage, `Images/ &{Date.now()}-${file.name}`);

            const uploadTask = uploadBytesResumable(storageRef, file);
           
            uploadTask.on('state_changed', (snapshot) => {
            }, (error) => {
                setErr(true)
            },
             () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                    
                    await updateProfile(res.user, {
                      displayName,
                      photoURL: downloadURL
                    })
                    // userCollection
                  await setDoc(doc(db, "users", res.user.uid),{
                      uid: res.user.uid,
                      displayName,
                      email,
                      photoURL: downloadURL
                  })
                  // user Chat Collection
                  await setDoc(doc(db, "userChat", res.user.uid), {})
                  navigate("/login")
                 
                });
            });
            

        } catch (error) {
            if(error.code === 'auth/invalid-email'){
     
                setErr("Please add correct email format")
             } if(error.code === 'auth/weak-password'){
                 setErr("Password should be at least 6 characters")
             } if(error.code === 'auth/missing-email'){
                 setErr("Please add an email")
             }if(error.code === 'auth/missing-password'){
                 setErr("Please enter password")
             } if(error.code === 'auth/email-already-in-use'){
                 setErr("Email already in use")
             }
        }
    }

    
    const handleImageUpload = (e) => {
        const Image = e.target.files[0]
        // console.log("[p[p[p[p[p[p", Image);
        
        setProfilePic(URL.createObjectURL(e.target.files[0]))
    }


  return (
    <>
    
    <section className="b h-screen w-screen flex items-center justify-center  bg-gradient-to-r from-[#6753FC] to-[#3d3d3d] md:px-0 px-4">

<div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5   items-center">
   
    <div className="md:w-1/2 px-8 md:px-16">
    <div className='bg-red-400 w-full'>
       
    </div>
    {
    err && <div className='text-red-600'>{err}</div>
}
        <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>

        <h1 className="pl-28 text-red-600 text-sm font-semibold"></h1>
        <form onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-4">

            <input className="p-2 mt-2 rounded-xl border" type="text" placeholder="Fullname" name="name"
                //   onChange={handleChange}
            />
            <input className="p-2 mt-2 rounded-xl border" type="email" placeholder="Email" name="email"
                //   onChange={handleChange}
            />
            <div className="text-red-600 text-sm font-semibold"></div>
            {/* </div> */}

            {/* <div> */}
            <div className="relative">
                <input className="p-2 rounded-xl border w-full" type="password" placeholder="Password" name="password"
                    // onChange={handleChange}
                />

                <div className="text-red-600 text-sm font-semibold"></div>
                {/* </div> */}

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
            </div>

            <input className='hidden' type="file" id="file" onChange={handleImageUpload}/>
            <label htmlFor="file" className='flex items-center gap-2 font-normal text-sm'>
              
                     {
                        profilePic && profilePic ? 
                        <>
                        <img className='w-10 h-10 rounded-full object-cover'  src={profilePic} alt="" />
                        <div className='font-perifpp text-xs text-gray-600'>Change image</div>
                        </> 
                         :
                         <>
                         <FcAddImage size={28}/>
                <span className='text-[#89BDD6] text-base'>Add an Image</span>
                         </>
                     }
                       
            
                
            </label>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
        </form>
        <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]"></div>
        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p className="text-xs mt-4 md:px-0 px-7 text-[#002D74]">If you are already a member, easily log in</p>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                <Link to="/login">Login</Link>
            </button>
        </div>
    </div>
    <div className="relative w-1/2 md:block hidden  bg-zinc-900/70 rounded-2xl ">
        <img className=" object-cover mix-blend-overlay " src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600"/>

        <div className='  flex justify-center  items-center '>
            <div className='absolute text-5xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 caret-transparent'>Welcome</div>
            <div className='absolute bottom-64 text-gray-300  text-xs px-10 flex text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quidem deleniti voluptatem iste optio voluptas um!</div>
        </div>-
    </div>
</div>

</section>
    
    </>
  )
}

export default Register