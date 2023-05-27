import React from 'react'

const Messages = () => {
    return (
        <>
            <div className="w-full px-5 flex flex-col justify-between ">
                <div className="flex flex-col mt-5 overflow-y-scroll absolute top-20 bottom-20 overflow-hidden no-scrollbar">
                    <div className="flex  justify-end mb-4">
                        <div className='flex flex-col gap-5'>
                            <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                Welcome to group everyone !
                            </div>
                            <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                Welcome to group everyone !
                            </div>

                        
                        </div>
                        <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-8 w-8 rounded-full" alt=""/>
                    </div>
                    <div className="flex justify-start  mb-4 ">
                        <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-8 w-8 rounded-full" alt=""/>
                        <div className='flex flex-col gap-3 pr-10'>
                            <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                                sfds   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                                                                         at praesentium, aut ullam delectus odio error sit rem. Architecto
                                                                nulla doloribus laborum illo rem enim dolor odio saepe,
                                                     consequatur quas?
                            </div>

                            <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                                                             at praesentium, aut ullam delectus odio error sit rem. Architecto
                                                            nulla doloribus laborum illo rem enim dolor odio saepe,
                                                           consequatur quas?
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}

export default Messages
