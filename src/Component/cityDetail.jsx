import React from 'react'

function cityDetail({city,country,rise,set}) {
  return (
    <>
    <div className='bg-white p-4  rounded-lg shadow-md text-center '>
        <p className='font-bold'>City: {city}</p>
        <p className='font-medium'>Country: {country}</p>
        <p className='font-medium'>Sun Rise: {rise}</p>
        <p className='font-medium'>Sun Set: {set}</p>
    </div>
    </>
  )
}

export default cityDetail