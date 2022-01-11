var cityInput = document.getElementById("city-input")
var cSearchForm = document.getElementById("city-search")
var wethDate1 = document.getElementById("wethDate1")
var cardBodyOne = document.getElementById("cardBody1")

var img1 = document.getElementById("img1")
var temp1 = document.getElementById("temp1")
var humidity1 = document.getElementById("humidity1")
var windSpeed1 = document.getElementById("windspeed1")
var uv1 = document.getElementById("uv1")

var temp2 = document.getElementById("temp2")
var humidity2 = document.getElementById("humidity2")
var windSpeed2 = document.getElementById("windspeed2")
var uv2 = document.getElementById("uv2")

var temp3 = document.getElementById("temp3")
var humidity3 = document.getElementById("humidity3")
var windSpeed3 = document.getElementById("windspeed3")
var uv3 = document.getElementById("uv3")

var temp4 = document.getElementById("temp4")
var humidity4 = document.getElementById("humidity4")
var windSpeed4 = document.getElementById("windspeed4")
var uv4 = document.getElementById("uv4")

var temp5 = document.getElementById("temp5")
var humidity5 = document.getElementById("humidity5")
var windSpeed5 = document.getElementById("windspeed5")
var uv5 = document.getElementById("uv5")

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
  }
}


var findWeather = function(city) {
  var cityUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial&appid=e849fce3a8b1afaa4693d302ba271c83';

  fetch(cityUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      img1.src = "https://openweathermap.org/img/wn/"+data.list[0].weather.icon+"@2x.png";
      temp1.textContent = "Temp: " + data.list[0].main.temp;
      humidity1.textContent = "Humidity: " + data.list[0].main.humidity + "%";
      windSpeed1.textContent = "Wind Speed: " + data.list[0].wind.speed;

      temp2.textContent = "Temp: " + data.list[1].main.temp;
      humidity2.textContent = "Humidity: " + data.list[1].main.humidity + "%";
      windSpeed2.textContent = "Wind Speed: " + data.list[1].wind.speed;

      temp3.textContent = "Temp: " + data.list[2].main.temp;
      humidity3.textContent = "Humidity: " + data.list[2].main.humidity + "%";
      windSpeed3.textContent = "Wind Speed: " + data.list[2].wind.speed;

      temp4.textContent = "Temp: " + data.list[3].main.temp;
      humidity4.textContent = "Humidity: " + data.list[3].main.humidity + "%";
      windSpeed4.textContent = "Wind Speed: " + data.list[3].wind.speed;

      temp5.textContent = "Temp: " + data.list[4].main.temp;
      humidity5.textContent = "Humidity: " + data.list[4].main.humidity + "%";
      windSpeed5.textContent = "Wind Speed: " + data.list[4].wind.speed;
      //for (var i = 0; i < data.length; i++) {
       //var cardChild = document.createElement('p');
       // cardChild.value = data[i].city.name;
       // cardBodyOne.appendChild(cardChild);
    }); 
    

  };

