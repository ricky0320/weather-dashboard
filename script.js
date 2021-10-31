var ApiKey = '08ab03d0e4a0c82b9ee2ee8d2cde0e93'
var cityName = 'San Francisco'
var ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+ApiKey
//get weather function
function getWeather() {
//store input value into city name variable
    cityName = $('.textarea').val
// //fetch

//setItem localStorage from input value

//create dynamic elements and append

}

//button click event
$('.searchBtn').on('click', getWeather)


fetch(ApiUrl)
.then(response => response.json())
.then(data => console.log(data))