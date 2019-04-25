const axios = require('axios');

const coordinatesApiKey = 'e7900a35camsh358eb6ea754c7e1p1c728ajsn0ee0781ef2ea';
const weatherApiKey = '88f8677f02df517c7f5391bdc54aba76';

const coordinatesPath = '/latlon.php';
const weatherPath = '/weather';

const coordinatesApi = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com',
    timeout: 2000,
    headers: {'X-RapidAPI-Key': coordinatesApiKey }
  });

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 2000,
});

module.exports = {
    coordinatesPath,
    weatherPath,
    coordinatesApi,
    weatherApi,
    weatherApiKey
}