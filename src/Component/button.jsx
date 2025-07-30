import React from 'react'

function Button({ onChildClick, text }) {

  return (
    <>
      <button className='bg-blue-400 cursor-pointer p-2 active:scale-90 rounded-2xl mx-1 text-gray-50 ' onClick={onChildClick}>{text}</button>
    </>
  )
}

export default Button