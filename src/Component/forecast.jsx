import React from 'react'

function Forecast({ date, temperature, condition }) {
  return (
    <>
    <div className='bg-gray-100 p-4 rounded-lg shadow-md mb-4'>
        <div className=' items-center justify-between '>
          <h3 className='font-black '>{date}</h3>
          <p className='ml-2'>{temperature}°C</p>
            <p className='ml-2'>{condition}</p>
        </div>
    </div>
    </>
  )
}

export default Forecast