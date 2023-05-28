import React from 'react'
import Sidebar from '../components/Sidebar'
import Chats from '../components/Chats'

const Home = () => {
    return (
        <>
            <div className='grid grid-cols-4 md:w-auto w-screen bg-skin-fill_Background'>
                <div className='col-span-1 relative'>
                    <Sidebar/>
                </div>
                {/* <div class="absolute left-1/4 -ml-0.5 w-0.5 h-screen bg-gray-600"></div> */}
                <div className='col-span-3 relativ'>
                    <Chats/>
                </div>
            </div>
        </>
    )
}

export default Home
