var cityInput = document.getElementById("city-input")
var cSearchForm = document.getElementById("city-search")
var wethDate1 = document.getElementById("wethDate1")
var cardBodyOne = document.getElementById("cardBody1")

cSearchForm.addEventListener('submit', searchCity);

function searchCity(event) {
  event.preventDefault();
  
  var city = cityInput.value.trim();
  if (city) {
    findWeather(city)
  }
}


var findWeather = function (city) {
  var cityUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial&appid=e849fce3a8b1afaa4693d302ba271c83';

  fetch(cityUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
       var cardChild = document.createElement('p');
        cardChild.value = data[i].city.name;
        cardBodyOne.appendChild(cardChild);
        
      }
      return
      });
    }
  

