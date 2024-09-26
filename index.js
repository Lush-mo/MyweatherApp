document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("city-input").value;
  const apiKey = "5b706639449f9b3effdf2c09ta15ob0e"; // Your SheCodes API key
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "404") {
        document.getElementById(
          "weather-info"
        ).innerHTML = `<p>City not found</p>`;
      } else {
        const weatherDescription = data.condition.description;
        const temp = data.temperature.current;
        const humidity = data.temperature.humidity;
        const windSpeed = data.wind.speed;

        document.getElementById("weather-info").innerHTML = `
                    <h2>${data.city}</h2>
                    <p>Weather: ${weatherDescription}</p>
                    <p>Temperature: ${temp}°C</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Wind Speed: ${windSpeed} km/h</p>
                `;
      }
    })
    .catch((error) => {
      console.log("Error fetching weather data:", error);
    });
});
