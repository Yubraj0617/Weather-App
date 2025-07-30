
import WeatherDetails from '../Component/WeatherDetail';
import Forecast from '../Component/forecast';

function TextDetail({ currentWeather, forecast, displayForecast }) {
  return (
   <>
   <div className='bg-white p-4 rounded-lg shadow-md flex-1'>
          <h2 className='text-2xl font-bold text-center mb-4'>Current Weather</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <WeatherDetails title="Temperature" data={currentWeather.temp} />
            <WeatherDetails title="Condition" data={currentWeather.climate} />
            <WeatherDetails title="Humidity" data={currentWeather.humidity} />
            <WeatherDetails title="Wind Speed" data={currentWeather.windSpeed} />
          </div>

          {displayForecast && (
            <div className='mt-6'>
              <h3 className='text-2xl font-bold text-center'>Forecast</h3>
              <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-4'>
                {forecast.slice(1).map((item, index) => (
                  <Forecast
                    key={index}
                    imgurl={item.Imgurl}
                    date={item.date}
                    temperature={item.temperature}
                    condition={item.condition}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
   </>
  )
}

export default TextDetail