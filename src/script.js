 
function formatDate(date) {
    let hours = currentTime.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = currentTime.getMinutes();
    // console.log(hours, minutes);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let dayIndex = currentTime.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // console.log(day);
 //  console.log(days[dayIndex]);
    let day = days[dayIndex];

    return `${day} ${hours} : ${minutes}`;
}

function displayWeatherCondition(response) {
    console.log(response.data);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#description").innerHTML = response.data.weather[0].main
}

function searchCity(city) {
    let apiKey = "7de8edc4ed814aeb0a4e486a9d398f79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
    event.preventDefault();
    // make an API call to OpenWeather API
    // Once I get the HTTP response, we display the city name and the temperature   
    let city = document.querySelector("#city-input").value;
    searchCity(city);
}

function searchLocation(position) {
    // position.coords.latitude
    //position.coords.longitude
    let apiKey = "7de8edc4ed814aeb0a4e486a9d398f79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    console.log(apiUrl)
    axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
   event.preventDefault();
   navigator.geolocation.getCurrentPosition(searchLocation);
}






let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);


searchCity("Lviv");

/*

function weatherCondition(response) {
    let city = document.querySelector("#city");
    city.innerHTML = response.data.name;
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = Math.round(response.data.main.temp);
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = response.data.main.humidity;
    let wind = document.querySelector("#wind");
    wind.innerHTML = Math.round(response.data.wind.speed);
    let description = document.querySelector("#weather-description");
    description.innerHTML = response.data.weather[0].main;

}



function searchCity(city) {
    let apiKey = "7de8edc4ed814aeb0a4e486a9d398f79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherCondition);
}



function pressCity(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
}


function showPosition(position) {
    let apiKey = "7de8edc4ed814aeb0a4e486a9d398f79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid={apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherCondition);
}



function currentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(weatherCondition);
}


let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", pressCity)
let button = document.querySelector("#current-location-button");
button.addEventListener("click", currentLocation);

searchCity("Lviv");


*/



//  right


/*

function showWeather(response) {
    let city = document.querySelector("#city");
    city.innerHTML = response.data.name;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let description = document.querySelector("#weather-description")
    description.innerHTML = response.data.weather[0].main;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = response.data.main.humidity;
    let wind = document.querySelector("#wind");
    wind.innerHTML = Math.round(response.data.wind.speed);
    

}

function searchCity(city) {
    let apiKey = "7de8edc4ed814aeb0a4e486a9d398f79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
}

function pressCity (event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
}

function showPosition(position) {
    let apiKey = "7de8edc4ed814aeb0a4e486a9d398f79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
}

function currentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
   
    
}
 

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", pressCity);
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", currentLocation);

searchCity("Lviv");



*/










