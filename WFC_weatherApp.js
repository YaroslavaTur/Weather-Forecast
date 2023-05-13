class WeatherAPP {
    constructor(weatherElem, cities){
        this.weatherElem = weatherElem
        this.cities = cities}

        showAllcities(){
            let promiseArray = [];
            this.cities.forEach(city => {
                promiseArray.push(showWeather.getcityWeather(city))
            })

            Promise.all(promiseArray).then(citiesInfo => {
                console.log(citiesInfo)
                this.drawlist(citiesInfo)
            })
        }

        drawlist(citiesInfo) {
            citiesInfo.forEach(cityInfo => {
                let cityCard = new CityWeather(cityInfo);
                cityCard.displayWeather(this.weatherElem)
            })
        }      
       
}
