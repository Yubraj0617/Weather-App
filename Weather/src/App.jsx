import React from 'react'
import { useState } from 'react'

export default function App() {

  const [temp, settemp] = useState("Null");
  const [climate, setclimate] = useState("Null");
  const [input, setinput] = useState("");
  const [city, setcity] = useState("Null")
  const [lat, setlat] = useState('Null')
  const [lon, setlon] = useState('Null')



  const Key = "8af7ea4db25e9e4b553b9e78727e34ec"  //open weather key
  // const Key = "dde358e8e33040038b1155347251407"
  let url;

  const handleData = (e) => {
    setinput(e.target.value);
  }

  //handle search button click
  const searchHandle = () => {

    if (input === "") {
      alert("Please enter a city name");
      return;
    }

    url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${Key}&units=metric`
    response();

    setinput("")
  }


  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(accept, reject)
    function accept(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setlat(latitude);
      setlon(longitude);
      console.log(latitude, longitude);
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Key}&units=metric`;
      response();
    }
    function reject() {
      alert("Unable to retrieve location");
    }
  }

  //response function to fetch data from the API
  const response = async () => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status === 200) {
      setcity(data.name);
      settemp(data.main.temp);
      setclimate(data.weather[0].description);
      setlat(data.coord.lat);
      setlon(data.coord.lon);
    } else {
      alert("City not found");
    }
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-cyan-200'>
        <div className='bg-gray-100 p-10 rounded-3xl shadow-lg w-105'>
          <div className='flex items-center justify-center'>
            <h3 className='font-black text-3xl'>Weather</h3>
          </div>

          <div
            className='my-3 flex items-center justify-center'>
            <input

              className='border rounded chan'
              onChange={handleData}
              value={input}
              type="text"
              placeholder='Enter your place name' />
            <button
              onClick={searchHandle}
              className='bg-blue-400 cursor-pointer active:scale-90 p-2 rounded-2xl mx-1 text-gray-50'
            >Search</button>

            <button
              onClick={getLocation}
              className='bg-blue-400 cursor-pointer active:scale-90 p-2 rounded-2xl mx-1 text-gray-50'
            >Location
            </button>
          </div>


          <div className='flex flex-col items-center-safe'>
            <p>City: {city}</p>
            <p>Temperature: {temp} </p>
            <p>Climate: {climate}</p>
            <p>lat: {lat}</p>
            <p>lat: {lon}</p>
          </div>
        </div>
      </div>
    </>
  )
}
