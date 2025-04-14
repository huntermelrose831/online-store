const apiKey = "bd5d44e629e0bcd51009c45d09d0af0f";

const cityInput = document.getElementById("city");
const getWeatherButton = document.getElementById("get-weather");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const weatherIconElement = document.getElementById("weather-icon");

getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.cod === 200) {
        // Update the weather information
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        temperatureElement.textContent = `Temperature: ${temperature}°C`;
        descriptionElement.textContent = `Conditions: ${description}`;
        weatherIconElement.src = `https://openweathermap.org/img/wn/${icon}.png`;
      } else {
        alert(`City not found: ${data.message}`);
      }
    })
    .catch(() =>
      alert("Failed to fetch weather data. Please try again later.")
    );
  console.log(apiUrl);
}
// Add this line to see the final API URL
