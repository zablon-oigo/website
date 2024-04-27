import {React,useState} from 'react'
import logo from '../assets/logo.png'
import Button from '../Layout/Button'
import {MdClose} from 'react-icons/md'
import {HiMenuAlt3} from 'react-icons/hi'

function Navbar() {
const[menu,setMenu]=useState(false)
  const toggleMenu=()=>{
    setMenu(!menu)
  }
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
                   <span className="text-xl font-bold capitalize duration-300 lg:text-2xl hover:text-secondary">
                   scribbleLabApp
                   </span>
          </a>
            <div className="items-center hidden lg:flex gap-x-6">
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-[#ED8335]">products</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-[#ED8335]">learn</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-[#ED8335]">marketplace</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-[#ED8335]">account</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-[#ED8335]">developer</a>
                <a href="" className="font-medium text-[#111717] capitalize duration-700 text-md hover:text-[#ED8335]">support</a>
                <Button title="Download"/>
            </div>
            {menu ? (
        <div className="lg:hidden text-[22px] cursor-pointer text-black" onClick={toggleMenu}>
          <MdClose/>

        </div>
      ):
      (
        <div className="lg:hidden text-[22px] cursor-pointer text-black" onClick={toggleMenu}>
          <HiMenuAlt3/>
        </div>
      )
      }
         </div>
         {
          menu && (
            <div className="fixed w-full transition-all lg:hidden top-26 bg-[#111717]">
              <div className="flex flex-col items-baseline w-full gap-4">
               <div className="flex flex-col justify-center w-full">
               <a href="" className="flex items-center h-10 px-6 text-lg font-semibold leading-normal text-white no-underline capitalize duration-700 border-b border-white hover:text-secondary">home</a>
                <a href="" className="flex items-center h-10 px-6 text-lg font-semibold leading-normal text-white no-underline capitalize duration-700 border-b border-white hover:text-secondary">ticket</a>
                <a href="" className="flex items-center h-10 px-6 text-lg font-semibold leading-normal text-white no-underline capitalize duration-700 border-b border-white hover:text-secondary">explore</a>
                <a href="" className="flex items-center h-10 px-6 text-lg font-semibold leading-normal text-white no-underline capitalize duration-700 border-b border-white hover:text-secondary">activity</a>
               <div className="flex justify-start m-4">
               <button className="px-4 py-2 text-sm text-white capitalize duration-700 border-2 border-white rounded-full hover:border-secondary hover:text-secondary">contact us</button>
               </div>
               </div>
              </div>
            </div>
          )
        }
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
                <button className="px-4 py-2 capitalize border-2 border-[#111717] rounded-full lg:font-semibold lg:px-4 text-slate-900 hover:bg-white hover:border-secondary hover:text-secondary duration-700 transition-all">contact us</button>
            </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar