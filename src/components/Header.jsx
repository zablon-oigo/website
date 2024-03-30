import React from 'react'

function Header() {
  return (
    <div className=''>
        <div className="flex items-center justify-between px-4 py-4 lg:px-10">
            <div className="">
                <a href="" className="text-xs font-semibold text-gray-700 capitalize duration-700 lg:text-lg hover:text-gray">support</a>
            </div>
            <div className="flex items-center lg:gap-x-6 gap-x-2">
                <a href="" className="text-xs font-medium text-gray-700 capitalize duration-700 lg:text-lg hover:text-gray">overview</a>
                <a href="" className="text-xs font-medium text-gray-700 capitalize duration-700 lg:text-lg hover:text-gray">articles</a>
                <a href="" className="text-xs font-medium text-gray-700 capitalize duration-700 lg:text-lg hover:text-gray">help guide</a>
                <a href="" className="text-xs font-medium text-gray-700 capitalize duration-700 lg:text-lg hover:text-gray">agreements</a>
                <a href="" className="text-xs font-medium text-gray-700 capitalize duration-700 lg:text-lg hover:text-gray">guidelines</a>
                <div className="">
                <button className="px-4 py-3 font-semibold capitalize border-2 border-black rounded-full text-slate-900">contact us</button>
            </div>
            </div>
        </div>
        <div className="bg-black py-10 px-10 min-h-[400px]">
           <h1 className="font-semibold text-center text-white md:text-xl text-md md:text-start first-letter:capitalize">
            welcome to <span className="capitalize text-primary">scribbleLabApp</span> support
           </h1>
           <div className="w-full lg:w-2/5">
            <h2 className="mt-4 text-xl font-bold text-center text-white lg:text-3xl lg:text-start first-letter:capitalize">
                get help with tools and technologies, connect with <span className="text-secondary">ScribbleLabApp</span> experts, and more.
            </h2>
            <p className="my-4 font-light text-center text-white lg:text-start first-letter:capitalize">
                our support team and help guides are available to assist you with any issue or question you may have 
            </p>
            <div className="flex items-center justify-center lg:justify-start">
                <button className="px-8 py-3 text-white capitalize border-2 border-white rounded-full">contact us</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Header