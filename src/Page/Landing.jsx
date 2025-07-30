import { useEffect, useState } from 'react';
import Header from '../Component/Header';
import InputText from '../Component/inputText';
import Button from '../Component/button';
import TextDetail from '../subpages/TextDetail';
import CityDetail from '../Component/cityDetail';
import GooogleMap from '../Component/googleMap';
import Bar from '../Component/Bar';
import ChartDetail from '../subpages/ChartDetail';
import { Routes, Route } from "react-router-dom";
import { useJsApiLoader } from '@react-google-maps/api';
import { getWeatherByCoords, getWeatherByCity } from '../API/apiCall';
import { formatWeatherData } from '../utils/weatherFormat';

function Landing() {
  const [cityName, setCityName] = useState('');
  const [currentWeather, setCurrentWeather] = useState({
    temp: "null",
    climate: "null",
    humidity: "null",
    windSpeed: "null",
    imgurl: null,
  });
  const [cityDetail, setcityDetail] = useState({
    name: "null",
    country: "null",
    sunrise: "null",
    sunset: "null"
  });
  const [forecast, setForecast] = useState([]);
  const [displayForecast, setDisplayForecast] = useState(false);
  const [cord, setcord] = useState({ lat: null, lon: null });

  let GOOGLE_MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_KEY,
  });

  // Format sunrise/sunset UNIX timestamp to user's local date and time
  const formatDateTime = (unixTimestamp) => {
    if (!unixTimestamp) return "N/A";

    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const sendinput = (value) => {
    setCityName(value);
  };

  const getSearch = async () => {
    try {
      if (cityName === "") {
        alert("Please enter a city name");
        return;
      }
      const response = await getWeatherByCity(cityName);
      const { cityDetail, currentWeather, forecast } = formatWeatherData(response);
      setcord(response.city.coord);
      setCurrentWeather(currentWeather);
      setcityDetail(cityDetail);
      setForecast(forecast);
      setDisplayForecast(true);
    } catch (error) {
      alert("Failed to fetch weather data.");
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(accept, reject, {
      enableHighAccuracy: true, maximumAge: 30000, timeout: 27000
    });

    async function accept(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setcord({ lat: latitude, lon: longitude });

      try {
        const response = await getWeatherByCoords(latitude, longitude);
        const { currentWeather, cityDetail, forecast } = formatWeatherData(response);
        setCurrentWeather(currentWeather);
        setcityDetail(cityDetail);
        setForecast(forecast);
      } catch (error) {
        console.error("Error fetching weather data by coordinates:", error);
        alert("Failed to fetch weather data for your location.");
      }
      setDisplayForecast(true);
    }
    function reject() {
      alert("Unable to retrieve location");
    }
  };


  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className='bg-gray-100 p-4  min-h-screen'>
      <Header />
      <div className='flex flex-col  md:flex-row gap-4 w-full '>
        <aside className='p-4  justify-center  md:w-[30%]'>
          <div className='mb-4 flex justify-center '>
            <InputText sendinput={sendinput} />
          </div>
          <div className='flex justify-self-center'>
            <Button text="Search" onChildClick={getSearch} />
            <Button text="Location" onChildClick={getLocation} />
          </div>
          <div className='mt-8'>
            {displayForecast && (
              <CityDetail
                city={cityDetail.city}
                country={cityDetail.country}
                rise={formatDateTime(cityDetail.sunrise)}
                set={formatDateTime(cityDetail.sunset)}
              />
            )}
          </div>
        </aside>
        <div className='md:w-[70%]'>
          {displayForecast &&
            <>
              <Bar />
              <Routes>
                <Route path="/" element={<TextDetail
                  currentWeather={currentWeather}
                  forecast={forecast}
                  displayForecast={displayForecast}
                />} />
                <Route path="/chart" element={<ChartDetail forecast={forecast} />} />
              </Routes>
            </>
          }
          {!displayForecast && <TextDetail
            currentWeather={currentWeather}
            forecast={forecast}
            displayForecast={displayForecast}
          />}
        </div>
      </div>

      {isLoaded && cord.lat && cord.lon && (
        <div className='mt-6'>
          <GooogleMap lat={cord.lat} lon={cord.lon} />
        </div>
      )}
    </div>
  );
}

export default Landing;
