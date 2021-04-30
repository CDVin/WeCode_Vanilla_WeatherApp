
 return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`; forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
 <div class="col-2">
 <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
         <img src="http://openweathermap.org/img/wn/${
           forecastDay.weather[0].icon
         }@2x.png"/>

         <div class="weather-forecast-temperatures"></div> 
         <span class="weather-forecast-temperature-max"> ${Math.round(
             forecastDay.temp.max
           )}° |  </span>
           <span class="weather-forecast-temperature-min"> ${Math.round(
             forecastDay.temp.min
           )}° </span>
         </div>
     </div>`;
    }
  });