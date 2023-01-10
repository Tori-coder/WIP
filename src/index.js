let now = new Date();
let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let today = days[now.getDay()];
let day1 = days[(now.getDay() + 1) % 7];
let day2 = days[(now.getDay() + 2) % 7];
let day3 = days[(now.getDay() + 3) % 7];
let day4 = days[(now.getDay() + 4) % 7];
let day5 = days[(now.getDay() + 5) % 7];
let day6 = days[(now.getDay() + 6) % 7];
console.log(now);

//the index no of today's date= now.getDay()
//the index no of a day in the array=findIndex(

let thingIAmDisplaying = document.querySelector(".weekly-forecast-grid");

days.forEach(function (day) {
  alert(day);
});

let thingA = `<div class="grid0">${today}</div></br><div class="gridResponse">response from API daily[0]</div>`;
let thingB = `<div class="grid1">${day1}</div></br><div class="gridResponse">response from API daily[1]</div>`;
let thingC = `<div class="grid2">${day2}</div></br><div class="gridResponse">response from API daily[2]</div>`;
let thingD = `<div class="grid3">${day3}</div></br><div class="gridResponse">response from API daily[3]</div>`;
let thingE = `<div class="grid4">${day4}</div></br><div class="gridResponse">response from API daily[4]</div>`;
let thingF = `<div class="grid5">${day5}</div></br><div class="gridResponse">response from API daily[5]</div>`;
let thingG = `<div class="grid6">${day6}</div></br><div class="gridResponse">response from API daily[6]</div>`;

thingIAmDisplaying.innerHTML = `${thingA}${thingB}${thingC}${thingD}${thingE}${thingF}${thingG}`;

let geoUrl = "http://api.openweathermap.org/geo/1.0/direct";
let oneCallUrl =
  "https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${units}";
let apiAirQualUrl = "https://api.openweathermap.org/data/2.5/air_pollution";
let apiKey = "8f909eb8beff1d1a0ae8b2df17dab17d";
let units = "metric";
lat = 28;
lon = 77;

let geoData;
let oneCallData;
let AirQualData;

/*async function getGeoData() {
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

function showTomorrowTemp(response) {
  //ok right now it's showing today
  console.log(response.data.daily[0].temp);
}

axios
  .get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${units}`
  )
  .then(showTomorrowTemp);
