
var api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
var appid = "af2fdb2dfb66204d56a6192986f39180";
var search = document.querySelector(".search input");
var searchbtn = document.querySelector(".search button");


async function start(city) {
    const response = await fetch(api + city + `&appid=${appid}`)
    var data = await response.json();
    // console.log(data)
    
    if(response.status== 404 ||search === ""){
        document.querySelector(".city h3").innerHTML = "Invalid city";
    }
    else{
        document.querySelector(".city h3").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#speed").innerHTML = data.wind.speed + " Km/h";
        document.querySelector(".tempfeel").innerHTML = data.main.feels_like + " °";
        document.querySelector(".pressurefeel").innerHTML = data.main.pressure + " hPa";

        
    
        if(data.weather[0].main === "Clouds"){
            document.querySelector(".pic img").src="pic/clouds.svg"
        }else if(data.weather[0].main === "Clear"){
            document.querySelector(".pic img").src="pic/clear.png"
        }else if(data.weather[0].main === "Rain"){
            document.querySelector(".pic img").src="pic/rain.svg"
        }else if(data.weather[0].main === "Drizzle"){
            document.querySelector(".pic img").src="pic/partyclouds.svg"
        }
    }
}

document.addEventListener("keydown", function(event) {  
    if (event.key === "Enter") {  
        start(search.value) ;
    }  

});  
search.addEventListener("keydown", function(event) {  
    if (event.key === "Enter") {  
        this.blur();
    }  

});  
search.addEventListener("click", function() {  
    this.select();  
    
});