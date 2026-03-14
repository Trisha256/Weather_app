async function getWeather(){

const city = document.getElementById("cityInput").value;

const apiKey = "7092653eee0ff7795498542818446a95";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const response = await fetch(url);

const data = await response.json();

const icon = data.weather[0].icon;

const weatherInfo = `
<h2>${data.name}</h2>
<img src="https://openweathermap.org/img/wn/${icon}@2x.png">
<p>Temperature: ${data.main.temp}°C</p>
<p>${data.weather[0].description}</p>
`;
document.getElementById("weatherResult").innerHTML = weatherInfo;

}