let now = new Date();
let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let today = days[now.getDay()];
let day1 = days[(now.getDay() + 1) % 7];
let day2 = days[(now.getDay() + 2) % 7];
let day3 = days[(now.getDay() + 3) % 7];
let day4 = days[(now.getDay() + 4) % 7];
let day5 = days[(now.getDay() + 5) % 7];
let day6 = days[(now.getDay() + 6) % 7];

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

const apiKey = "8f909eb8beff1d1a0ae8b2df17dab17d";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`;

let weatherData;

async function getWeatherData() {
  const response = await fetch(apiUrl);
  weatherData = await response.json();
  console.log(weatherData);
}

getWeatherData();
