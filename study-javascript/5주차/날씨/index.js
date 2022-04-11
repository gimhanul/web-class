const API_KEY = "6a3b6fcab9f22d576eab870cc4e41544";
const COORDS = 'coords';

const weatherInfoEl = document.getElementById("weather-info-el");
const weatherIconEl = document.getElementById("weather-icon-el");


function init() {
    askForCoords();
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handlsSuccess, handleError);
}

function handlsSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {latitude, longitude};
    getWeather(latitude, longitude);
}

function handleError() {
    console.log("can't access to location");
}

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(json => {
        const temp = json.main.temp;
        const place = json.name;
        const weatherDes = json.weather[0].description;
        const weatherIcon = json.weather[0].icon;
        const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    
        weatherInfoEl.innerText = `${temp}/${place}/${weatherDes}`;
        weatherIconEl.setAttribute("src", weatherIconUrl);
    })
    .catch(error => console.log("error", error));
}

init();