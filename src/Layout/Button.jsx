import React from 'react'

function Button(props) {
  return (
    <>
    <button className="px-8 py-3 text-base text-white duration-700 transition-all rounded-full  hover:bg-[#111717] bg-secondary">{props.title}</button>
    </>
  )
}

export default Button