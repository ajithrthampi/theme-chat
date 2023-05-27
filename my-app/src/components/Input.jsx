import React from 'react'
import {RiSendPlaneLine} from 'react-icons/ri'

const Input = () => {
    return (
        <>
            <div>
                <input className='absolute bottom-5 right-8 left-8 pl-5 rounded-lg text-white bg-transparent py-4 border border-y- order-x-2 border-gray-600' placeholder='Type something...' type="text"/>
                <div className='absolute bottom-[26px] right-14 bg-gray-500 bg-opacity-10 hover:opacity-50   rounded-full w-12 h-12 flex justify-center items-center'>
                    <button className=' text-gray-300 text-2xl hover:text-white'>
                        <RiSendPlaneLine/>
                    </button>
                </div>

            </div>
        </>
    )
}

export default Input
