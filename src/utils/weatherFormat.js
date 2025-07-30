

export const formatWeatherData = (data) => {
  const weatherList = data.list;

  const cityDetail = {
    city: data.city.name,
    country: data.city.country,
    sunset: data.city.sunset,
    sunrise: data.city.sunrise,
  };

  const currentWeatherData = weatherList[0];
  const currentWeather = {
    temp: currentWeatherData.main.temp,
    climate: currentWeatherData.weather[0].description,
    humidity: currentWeatherData.main.humidity,
    windSpeed: currentWeatherData.wind.speed,
  };

  const filteredList = weatherList.filter((item, index) => index % 8 === 0);
  const forecast = filteredList.map(item => ({
    date: item.dt_txt.split(' ')[0],
    temperature: item.main.temp,
    condition: item.weather[0].description,
    wind: item.wind.speed, 
    humidity: item.main.humidity,
  }));

  return {
    cityDetail,
    currentWeather,
    forecast
  };
};

