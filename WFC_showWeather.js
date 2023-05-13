

let showWeather = {
   
    getcityWeather (cityName){
        let units = cels.checked ? "metric" : "imperial";
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bf35cac91880cb98375230fb443a116f&units=${units}`;
        return fetch(url)
            .then(response => response.json());
    }}

    
