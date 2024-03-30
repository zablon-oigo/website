import {useState,React} from 'react'
import logo from '../assets/logo.png'
import Button from '../Layout/Button'
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
function Navbar() {
    const[menu,setMenu]=useState(false)
    const toggleMenu=()=>{
        setMenu(!menu)
    }
    const closeMenu=()=>{
        setMenu(false)
    }

  return (
    <>
    <header className="relative w-full">
        <div className="bg-secondary">
            <p className="p-3 text-sm font-light text-center text-white first-letter:capitalize lg:text-xl ">
                currently in development, checkout the roadmap
            </p>
        </div>
        <nav className="flex items-center justify-between w-full px-10 py-4 border-b-2 border-black">
            <div className="">
                <a href="" className="inline-flex items-center gap-3">
                    <img src={logo} alt="" className="w-[60px] h-[60px] object-cover object-center" />
                   <span className="text-xl font-bold capitalize">
                   scribbleLabApp
                   </span>
                </a>
            </div>
            <div className="items-center hidden lg:flex gap-x-6">
                <a href="" className="text-lg font-medium text-gray-700 capitalize duration-700 hover:text-gray">products</a>
                <a href="" className="text-lg font-medium text-gray-700 capitalize duration-700 hover:text-gray">learn</a>
                <a href="" className="text-lg font-medium text-gray-700 capitalize duration-700 hover:text-gray">marketplace</a>
                <a href="" className="text-lg font-medium text-gray-700 capitalize duration-700 hover:text-gray">account</a>
                <a href="" className="text-lg font-medium text-gray-700 capitalize duration-700 hover:text-gray">developer</a>
                <a href="" className="text-lg font-medium text-gray-700 capitalize duration-700 hover:text-gray">support</a>
            <div className="hidden lg:block">
                <Button title="Download"/>
            </div>
            </div>
            
            <button className="block lg:hidden" onClick={toggleMenu}>
            {
             menu ? <RxCross1  className='text-3xl'/> : <CiMenuFries className='text-3xl' />
            }
            </button>
        </nav>
        <section className={`${menu ? 'translate-x-0':'translate-x-full'} py-20 px-6  min-h-screen absolute w-full top-24 duration-300 right-0 bg-white`}>
        <div className="flex flex-col items-center gap-y-10">
                <a href="" className="text-lg font-medium text-gray-700 capitalize duration-700 hover:text-gray">products</a>
                <a href="" className="text-lg font-medium text-gray-700 capitalize duration-700 hover:text-gray">learn</a>
                <a href="" className="text-lg font-medium text-gray-700 capitalize duration-700 hover:text-gray">marketplace</a>
                <a href="" className="text-lg font-medium text-gray-700 capitalize duration-700 hover:text-gray">account</a>
                <a href="" className="text-lg font-medium text-gray-700 capitalize duration-700 hover:text-gray">developer</a>
                <a href="" className="text-lg font-medium text-gray-700 capitalize duration-700 hover:text-gray">support</a>
            </div>
            <div className="flex justify-center my-10">
                <Button title="Download"/>
            </div>
        </section>
    </header>
    </>
  )
}

export default Navbar