import React from 'react'

function Header() {
  return (
    <div className=''>
        <div className="bg-[#111717] py-10 px-10 min-h-[400px]">
           <h1 className="font-medium text-center text-white md:text-xl text-md md:text-start first-letter:capitalize">
            welcome to <span className="font-bold capitalize">scribbleLabApp</span> support
           </h1>
           <div className="w-full lg:w-2/5">
            <h2 className="mt-4 text-2xl font-semibold text-center text-white lg:text-3xl lg:text-start first-letter:capitalize">
                get help with tools and technologies, connect with <span className="font-extrabold">ScribbleLabApp</span> experts, and more.
            </h2>
            <p className="my-4 font-light text-center text-white lg:text-start first-letter:capitalize">
                our support team and help guides are available to assist you with any issue or question you may have 
            </p>
            <div className="flex items-center justify-center lg:justify-start">
                <button className="px-8 py-3 text-white capitalize duration-700 border-2 border-white rounded-full hover:border-secondary hover:text-secondary">contact us</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Header