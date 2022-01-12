var cityInput = document.getElementById("city-input")
var cSearchForm = document.getElementById("city-search")
var cardBodyOne = document.getElementById("cardBody1")

var temp0 = document.getElementById("temp0")
var humidity0 = document.getElementById("humidity0")
var windSpeed0 = document.getElementById("windspeed0")
var uv0 = document.getElementById("uv0")
var img0 = document.getElementById("img0")
var time0 = document.getElementById("time0")

var temp1 = document.getElementById("temp1")
var humidity1 = document.getElementById("humidity1")
var windSpeed1 = document.getElementById("windspeed1")
var uv1 = document.getElementById("uv1")
var img1 = document.getElementById("img1")
var time1 = document.getElementById("time1")

var temp2 = document.getElementById("temp2")
var humidity2 = document.getElementById("humidity2")
var windSpeed2 = document.getElementById("windspeed2")
var uv2 = document.getElementById("uv2")
var img2 = document.getElementById("img2")
var time2 = document.getElementById("time2")

var temp3 = document.getElementById("temp3")
var humidity3 = document.getElementById("humidity3")
var windSpeed3 = document.getElementById("windspeed3")
var uv3 = document.getElementById("uv3")
var img3 = document.getElementById("img3")
var time3 = document.getElementById("time3")

var temp4 = document.getElementById("temp4")
var humidity4 = document.getElementById("humidity4")
var windSpeed4 = document.getElementById("windspeed4")
var uv4 = document.getElementById("uv4")
var img4 = document.getElementById("img4")
var time4 = document.getElementById("time4")

var temp5 = document.getElementById("temp5")
var humidity5 = document.getElementById("humidity5")
var windSpeed5 = document.getElementById("windspeed5")
var uv5 = document.getElementById("uv5")
var img5 = document.getElementById("img5")
var time5 = document.getElementById("time5")

var savedCities = [];



cSearchForm.addEventListener('submit', searchCity);

function saveCity(event) {
  event.preventDefault();
  var saveCity = cityInput.value.trim();
  savedCities.push(saveCity);
  localStorage.setItem('savedCities', JSON.stringify(savedCities));

};


function searchCity(event) {
  event.preventDefault();
  
  var city = cityInput.value.trim();
  if (city) {
    findWeather(city)
    findWeatherNow(city)
  }
}

var findWeatherNow = function(city) {
  var cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=e849fce3a8b1afaa4693d302ba271c83';

  fetch(cityUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      temp0.textContent = "Temp: " + data.main.temp;
      humidity0.textContent = "Humidity: " + data.main.humidity + "%";
      windSpeed0.textContent = "Wind Speed: " + data.wind.speed;
      time0.textContent = data.dt_txt;
      
      img0.src = "https://openweathermap.org/img/wn/"+ data.weather[0].icon+"@2x.png";
    });

  };


var findWeather = function(city) {
  var cityUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial&appid=e849fce3a8b1afaa4693d302ba271c83';

  fetch(cityUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      temp1.textContent = "Temp: " + data.list[0].main.temp;
      humidity1.textContent = "Humidity: " + data.list[0].main.humidity + "%";
      windSpeed1.textContent = "Wind Speed: " + data.list[0].wind.speed;
      time1.textContent = data.list[0].dt_txt;

      temp2.textContent = "Temp: " + data.list[7].main.temp;
      humidity2.textContent = "Humidity: " + data.list[7].main.humidity + "%";
      windSpeed2.textContent = "Wind Speed: " + data.list[7].wind.speed;
      time2.textContent = data.list[7].dt_txt;

      temp3.textContent = "Temp: " + data.list[15].main.temp;
      humidity3.textContent = "Humidity: " + data.list[15].main.humidity + "%";
      windSpeed3.textContent = "Wind Speed: " + data.list[15].wind.speed;
      time3.textContent = data.list[15].dt_txt;

      temp4.textContent = "Temp: " + data.list[23].main.temp;
      humidity4.textContent = "Humidity: " + data.list[23].main.humidity + "%";
      windSpeed4.textContent = "Wind Speed: " + data.list[23].wind.speed;
      time4.textContent = data.list[23].dt_txt;

      temp5.textContent = "Temp: " + data.list[31].main.temp;
      humidity5.textContent = "Humidity: " + data.list[31].main.humidity + "%";
      windSpeed5.textContent = "Wind Speed: " + data.list[31].wind.speed;
      time5.textContent = data.list[31].dt_txt;

      img1.src = "https://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+"@2x.png";
      img2.src = "https://openweathermap.org/img/wn/"+data.list[8].weather[0].icon+"@2x.png";
      img3.src = "https://openweathermap.org/img/wn/"+data.list[15].weather[0].icon+"@2x.png";
      img4.src = "https://openweathermap.org/img/wn/"+data.list[23].weather[0].icon+"@2x.png";
      img5.src = "https://openweathermap.org/img/wn/"+data.list[31].weather[0].icon+"@2x.png";
    });

  };

