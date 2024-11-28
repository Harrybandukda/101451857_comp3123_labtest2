import React, { useState, useEffect, useCallback } from 'react';
import WeatherDisplay from './WeatherDisplay';
import SearchBar from './SearchBar';
import { fetchWeatherData } from '../services/api';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Montreal');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeatherData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [city]); 

  useEffect(() => {
    getWeatherData();
  }, [getWeatherData]); 

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="weather-app">
      <div className="content">
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="loading">Loading<span>.</span><span>.</span><span>.</span></p>}
        {error && <p className="error">{error}</p>}
        {weatherData && <WeatherDisplay data={weatherData} />}
      </div>
    </div>
  );
};

export default WeatherApp;
