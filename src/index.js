let now = new Date();
let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

let day0 = days[now.getDay()];
let day1 = days[(now.getDay() + 1) % 7];
let day2 = days[(now.getDay() + 2) % 7];
let day3 = days[(now.getDay() + 3) % 7];
let day4 = days[(now.getDay() + 4) % 7];
let day5 = days[(now.getDay() + 5) % 7];
let day6 = days[(now.getDay() + 6) % 7];

let geoUrl = "http://api.openweathermap.org/geo/1.0/direct";
let oneCallUrl = "https://api.openweathermap.org/data/3.0/onecall";
let apiAirQualUrl = "https://api.openweathermap.org/data/2.5/air_pollution";
let apiKey = "8f909eb8beff1d1a0ae8b2df17dab17d";
let units = "metric";

//dehli
lat = 28;
lon = 77;

function createForecastGrid(response) {
  console.log(response.data.daily[0].weather.description);
  let dailyData = response.data.daily;
  let forecastHTML = "";
  let forecastGrid = document.querySelector(".weekly-forecast-grid");
  for (let i = 0; i < 7; i++) {
    let forecastIcon = dailyData[i].weather.icon;
    let temp = dailyData[i].temp.day;
    forecastHTML += `<div class="grid${i}">${eval(
      "day" + i
    )}</div></br><div class="gridResponse">${temp}</div></br><img class="forecast-icon" src="https://openweathermap.org/img/wn/${forecastIcon}@2x.png" alt="forecast icon"/>`;
  }
  forecastGrid.innerHTML = forecastHTML;
}
axios
  .get(
    `${oneCallUrl}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${units}`
  )
  .then(createForecastGrid);
