import React from 'react'

const Searchuser = () => {
    return (
        <>
            <div className=" mb-3">
                <div className="relative md:mb-4 flex md:w-full w-screen flex-wrap items-stretch px-5 pt-7 pr-4">
                    <input type="search" className="relative md:m-0 md:-mr-0.5 block w-[1px] min-w-0 mr-0 flex-auto rounded-xl py-3 md:rounded-md  border border-solid border-neutral-300  bg-transparent bg-clip-padding px-3 md:py-[0.25rem] text-base font-normal leading-[1.6] text-neutrredal-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary" placeholder="Search" aria-label="Search" aria-describedby="button-addon1"/>

                    <div className='hidden md:block'>
                        <button className=" relative z-[2] flex bg-gradient-to-r from-[#45c625] to-[#6ccf6c] text-white   items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight  shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg" type="button" id="button-addon1" data-te-ripple-init data-te-ripple-color="light">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchuser
