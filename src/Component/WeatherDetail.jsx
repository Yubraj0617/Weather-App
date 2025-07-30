import React from 'react'

function WeatherDetails({ title, data, imgurl }) {
  return (
    <>
    <div className='bg-gray-200 p-4 rounded-lg shadow-md  text-center'>
      <img src={imgurl} alt="" />
        <p className='font-bold'>{title}</p>
        <p className='text-xl'>
          {data}
        </p>
    </div>
    </>
  )
}

export default WeatherDetails