import React from 'react';

const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind, sys } = data;
  const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
        <span className="temperature">{Math.round(main.temp)}°C</span>
      </div>
      <p className="description">{weather[0].description}</p>
      <div className="details">
        <div>
          <i className="fas fa-tint"></i>
          <p>Humidity</p>
          <p>{main.humidity}%</p>
        </div>
        <div>
          <i className="fas fa-wind"></i>
          <p>Wind Speed</p>
          <p>{wind.speed} m/s</p>
        </div>
        <div>
          <i className="fas fa-sun"></i>
          <p>Sunrise</p>
          <p>{sunrise}</p>
        </div>
        <div>
          <i className="fas fa-moon"></i>
          <p>Sunset</p>
          <p>{sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
