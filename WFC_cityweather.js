class CityWeather {
    constructor(info){
        this.info = info
    }
    displayWeather(weatherElement){
      
         let cityWeather = document.createElement("div");
         cityWeather.classList.add("cityWeather");
         let cityName = document.createElement("h2");
         cityName.textContent = this.info.name;
         let temperature = document.createElement("p");
         temperature.innerHTML = "<span>" + Math.round(this.info.main.temp) + "</span>°";
         let condition = document.createElement("p");
         condition.textContent = this.info.weather[0].description;
         let iconElem = document.createElement("img");
         iconElem.src = `http://openweathermap.org/img/wn/${this.info.weather[0].icon}@2x.png`;

       
         let addInfo = document.createElement("p");
         addInfo.hidden = true;
         addInfo.innerHTML += "Wind speed " + this.info.wind.speed + " m/sec;<br>" +
         "Wind direction " + this.info.wind.deg + "°;<br>" +
         "Sunrise Time " + new Date(this.info.sys.sunrise*1000).toLocaleTimeString() + ";<br>" +
         "Sunset Time " + new Date(this.info.sys.sunset*1000).toLocaleTimeString();

         let btn = document.createElement("button");
         btn.textContent = "Additional information"
         btn.addEventListener("click", function(){
            addInfo.hidden = false;
            btn.hidden = true
         })

         cityWeather.append(cityName, temperature, condition, iconElem, btn, addInfo);
         weatherElement.append(cityWeather)
     }    
   
}