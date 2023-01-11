let now = new Date();
let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

let day0 = days[now.getDay()];
let day1 = days[(now.getDay() + 1) % 7];
let day2 = days[(now.getDay() + 2) % 7];
let day3 = days[(now.getDay() + 3) % 7];
let day4 = days[(now.getDay() + 4) % 7];
let day5 = days[(now.getDay() + 5) % 7];
let day6 = days[(now.getDay() + 6) % 7];

//the index no of today's date= now.getDay()
//the index no of a day in the array=findIndex(

let thingIAmDisplaying = document.querySelector(".weekly-forecast-grid");

/*days.forEach(function (day) {
  alert(day);
});*/

let geoUrl = "http://api.openweathermap.org/geo/1.0/direct";
let oneCallUrl = "https://api.openweathermap.org/data/3.0/onecall";
let apiAirQualUrl = "https://api.openweathermap.org/data/2.5/air_pollution";
let apiKey = "8f909eb8beff1d1a0ae8b2df17dab17d";
let units = "metric";
lat = 28;
lon = 77;

/*let geoData;
let oneCallData;
let AirQualData;

async function getGeoData() {
  const response = await fetch(geoUrl);
  geoData = await response.json();
  console.log(geoData);
}
getGeoData();
async function getOneCallData() {
  const response = await fetch(oneCallUrl);
  oneCallData = await response.json();
  console.log(oneCallData);
}
getOneCallData();
async function getAirQualData() {
  const response = await fetch(apiAirQualUrl);
  airQualData = await response.json();
  console.log(airQualData);
}
getAirQualData();*/

function createThings(response) {
  let dailyData = response.data.daily;
  let forecastHTML = "";

  for (let i = 0; i < 7; i++) {
    let forecastIcon = `<img class="forecast-icon" img src="https://openweathermap.org/img/wn/${response.data.daily[i].weather.icon}@2x.png"/>`;
    let temp = dailyData[i].temp.day;
    forecastHTML += `<div class="grid${i}">${eval(
      "day" + i
    )}</div></br><div class="gridResponse">${temp}</div></br><div>${forecastIcon}</div>`;
  }
  thingIAmDisplaying.innerHTML = forecastHTML;
}
axios
  .get(
    `${oneCallUrl}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${units}`
  )
  .then(createThings);

/*forecastIcon.setAttribute(
      "alt",
      `${response.data.daily[i].weather.description}`
    );*/
