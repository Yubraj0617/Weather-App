import axios from "axios";

const WeatherKey = import.meta.env.VITE_Weather_API_KEY;

export const getWeatherByCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WeatherKey}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};

export const getWeatherByCoords = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WeatherKey}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};
