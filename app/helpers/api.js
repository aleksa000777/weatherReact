var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = 'd501a0f99eabcb1ce51db5dd35edd822';

function prepRouteParams(queryStringData){
  return Object.keys(queryStringData)
    .map(function(key){
      return key + '='+ encodeURIComponent(queryStringData[key]);
    }).join('&')
}

function prepUrl (type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData(city){
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}

function getCurrentWeather(city){
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then(function(currentWeatherData){
      console.log(currentWeatherData.data);
    })
}

function getForcast(city){
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast/daily', queryStringData)

  return axios.get(url)
    .then(function(forecastData){
      console.log(forecastData.data);
    })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForcast: getForcast
};