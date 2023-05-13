
   let weatherBlock = document.querySelector("#weatherBlock")
   let date = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
   let title = document.querySelector(".title p")   
   title.innerHTML += date;

   let cities = ["Kyiv", "London", "New York"]

   let cels = document.querySelector("#celsiy")
   let faren = document.querySelector("#fareng")

    window.addEventListener("load", () => {
        cels.checked
        let weatherNew = new WeatherAPP(weatherBlock, cities);
        weatherNew.showAllcities();
    })

    cels.addEventListener("change", () => {
    if  (cels.checked) {
        faren.checked = false;
        weatherBlock.innerHTML = " ";
        let weatherNew = new WeatherAPP(weatherBlock, cities);
        weatherNew.showAllcities();
    }});

    faren.addEventListener("change", () => {
    if  (faren.checked) {
        cels.checked = false;
        weatherBlock.innerHTML = " ";
        let weatherNew = new WeatherAPP(weatherBlock, cities);
        weatherNew.showAllcities();
     }})

    







   

