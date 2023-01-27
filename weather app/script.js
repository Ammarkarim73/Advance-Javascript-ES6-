var x;
let apiKey = "Your API KEY";
var city;

var image; //.png
var description; //cloudy
var temp; //C
var humidity;  //%
var wind; //km/h



function getWeatherInfo() {
    city = document.getElementById('searchBox').value;
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          apiKey
      )
        .then((response) => response.json())
        .then((data) => {
            description = `${data.weather[0].main}`;
            image = `${data.weather[0].icon}`;
            temp = `${data.main.temp}`;
            humidity = `${data.main.humidity}`;
            wind = `${data.wind.speed}`;
        })
        .catch(err => console.log(err));

        x = setInterval(() => {
            setWeatherInfo();
        }, 1000);
            

}

function setWeatherInfo(){
    document.getElementById('city').innerHTML = 'Weather in ' + city;
    document.getElementById('image').src =  "https://openweathermap.org/img/wn/" + image + ".png";
    document.getElementById('description').innerHTML =  description;
    document.getElementById('temperature').innerHTML =  'Temperature ' + temp + '°C';
    document.getElementById('humidity').innerHTML =  'Humidity ' + humidity + '%';
    document.getElementById('wind').innerHTML = 'Wind Speed ' + wind + 'km/h' ;

    clearInterval(x);
}


  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=Your API KEY
