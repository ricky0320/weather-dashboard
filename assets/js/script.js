var input = $('input')
var cityName = input.val
var ApiKey = '08ab03d0e4a0c82b9ee2ee8d2cde0e93'
var ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+ApiKey



var btnContainer = document.querySelector("#button-container");



//get weather function
function getWeather(cityName) {
    
// //fetch
    fetch(ApiUrl)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                var keyId = data.dt;
                localStorage.setItem(keyId, cityName);
                // displayWeather(data, city)
            });
        } else {
            alert("Error: " + response.statusText);
        }
    })
    .catch(function(error) {
        alert("Unable to connect to Open Weather Map");
    });

//setItem localStorage from input value

//create dynamic elements and append
    
    //append DOM button to button-container
    btnContainer.append()
}


var displayWeather = function(data) {
    
};

//button click event
$('.searchBtn').on('submit', getWeather)


// request from url

