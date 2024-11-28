import axios from 'axios';

const API_KEY = '5463d1bc96e09a5eebc5bee05db8e003';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data. Please try again.');
  }
};

