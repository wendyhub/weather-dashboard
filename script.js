var dateParagraph = $("#date");
var todayDate = moment().format('L');
dateParagraph.text(todayDate);
 
//grabs the value of the searched city
searchBtn.addEventListener('click', getCity);  

//displays the city in the current conditions panel 
function getCity() {
    var newCity = document.getElementById("searchBar").value;
    var string = searchBar.value; 
    displayCity.innerHTML = string[0].toUpperCase() + string.slice(1); 
    console.log(newCity)
   

    //searches the city with the api
    var currentURL = "https://api.openweathermap.org/data/2.5/weather?q=" + newCity + "&units=metric&APPID=bc7a143b641ac106d3760550410b147a";

    //grabs the weather data for the desired city
    $.ajax({
    datatype: "JSON",
    url: currentURL,
    method: "GET"
    })

    //displays the data
    .then(function(data) {
        console.log(data);
        $("#temperature").append(JSON.stringify(data.main.temp)+ " C");
        $("#humidity").append(JSON.stringify(data.main.humidity)+ " %");
        $("#windSpeed").append(JSON.stringify(data.wind.speed));
    });

}


