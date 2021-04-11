let weather ={
    "apiKey":"1d8514fb2e7a097c006c3df9cacad1de",
    fetchWeather: function(){
        fetch("http://api.openweathermap.org/data/2.5/weather?q=New_York&units=metric&appid=1d8514fb2e7a097c006c3df9cacad1de"
        ).then((Response)=>Response.json())
        .then((data)=>console.log(data));
    }
}