var cities = [];
var apiKey = '08ab03d0e4a0c82b9ee2ee8d2cde0e93';
loadCities();

// function to get longitude and latitude from API
function apiLatLon(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return null;
        })
        .then(function (data) {
            if (data) {
                apiGetData(city, data.coord.lat, data.coord.lon);
                addCityButton(city);
            } else {
                alert("Could not find city \"" + city + "\"");
            }
        });
};


// Get informations with long and lat 
function apiGetData(city, lat, lon) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,minute,hourly,alerts" + "&appid=99925a48b94bb7763a8c642cff2a519d&units=imperial";
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return null;
        })
        .then(function (data) {
            if (data) {
                formatCityData(city, data);
            } else {
                alert("Internet error");
            }
        });
};

// Display date
function displayDate(date) {
    return moment(date * 1000).format('MMMM Do YYYY')
};

function displayContainerData(city, data) {
    var cityContainerEl = $("#city-container");
    cityContainerEl.html("");

    var cityCardEl = $("<div>");
    cityCardEl.addClass("dark");

    // Display city name, date, weather icon
    var cityInfoEl = $("<h3>");
    cityInfoEl.attr("id", "city-info");
    cityInfoEl.addClass("card-header");
    cityInfoEl.text(city + " (" + displayDate(data.dt) + ")");

    // Display icon
    var citySpanEl = $("<span>");
    var cityIconEl = $("<img>");
    cityIconEl.attr("src", getIconLocation(data.weather[0].icon));

    //append elements
    citySpanEl.append(cityIconEl);
    cityInfoEl.append(citySpanEl);
    cityCardEl.append(cityInfoEl);

    // Display temperature
    var cityTempEl = $("<div>");
    cityTempEl.attr("id", "city-temp");
    cityTempEl.html("Temp: " + data.temp.max + "&deg;F");
    cityCardEl.append(cityTempEl);

    // Display wind speed
    var cityWindEl = $("<div>");
    cityWindEl.attr("id", "city-wind");
    cityWindEl.html("Wind: " + data.wind_speed + " MPH");
    cityCardEl.append(cityWindEl);

    // Display humidity
    var humidEl = $("<div>");
    humidEl.attr("id", "city-humid");
    humidEl.html("Humidity: " + data.humidity + "%");
    cityCardEl.append(humidEl);