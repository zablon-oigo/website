import React from 'react'

function Button(props) {
  return (
    <>
    <button className="px-8 py-3 text-base text-white duration-700 rounded-full hover:shadow-[0_3px_15px_rgba(0,0,0,0.4)] hover:bg-white hover:scale-110 hover:text-secondary bg-secondary">{props.title}</button>
    </>
  )
}

export default Button