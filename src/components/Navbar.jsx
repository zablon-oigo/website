import {React} from 'react'
import logo from '../assets/logo.png'
import Button from '../Layout/Button'

function Navbar() {
  return (
    <>
    <header className="">
    <nav className="py-2">
        <div className="bg-[#ED8335]">
            <p className="p-2 font-light text-center text-white text-md first-letter:capitalize ">
                currently in development,<a href="" className="underline hover:text-[#E2DFD2] duration-300 underline-offset-2">checkout the roadmap</a>
            </p>
        </div>
         <div className=" flex  items-center justify-between w-full px-3 border-b border-[#111717]">
         <a href="" className="inline-flex items-center gap-3 cursor-pointer">
                    <img src={logo} alt="" className="w-[60px] h-[60px] object-cover object-center" />
                   <span className="text-2xl font-bold capitalize duration-300 hover:text-secondary">
                   scribbleLabApp
                   </span>
          </a>
            <div className="flex items-center gap-x-6">
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-[#ED8335]">products</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-[#ED8335]">learn</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-[#ED8335]">marketplace</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-[#ED8335]">account</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-[#ED8335]">developer</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-[#ED8335]">support</a>
                <Button title="Download"/>
            </div>
         </div>
    </nav>
    <div className="flex items-center justify-between px-4 py-1 lg:px-10">
            <div className="">
                <a href="" className="text-xs font-semibold text-gray-700 capitalize duration-700 lg:text-2xl hover:text-secondary">support</a>
            </div>
            <div className="flex items-center lg:gap-x-6 gap-x-2">
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-secondary">overview</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-secondary">articles</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-secondary">help guide</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-secondary">agreements</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-secondary">guidelines</a>
                <div className="mx-2">
                <button className="px-4 py-2 capitalize border-2 border-[#111717] rounded-full lg:font-semibold lg:px-4 text-slate-900 hover:bg-secondary hover:border-white hover:text-white duration-700 transition-all">contact us</button>
            </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar