document.getElementById("btn").addEventListener("click", () => {
  const apikey = "185cdcd8598465c9626aa5b3388eecb6";
  const city = document.getElementById("city").value;
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  async function checkWeather() {
    const responce = await fetch(apiurl);
    const data = await responce.json();
    console.log(data);

    document.querySelector(".cityname").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + "Km/h";


     const weatherData = {
    city: data.name,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    windspeed: data.wind.speed,
  };

  const oldData = JSON.parse(localStorage.getItem("weatherData"))||[];
  oldData.push(weatherData);
  const stringconvert = JSON.stringify(oldData);
  
  localStorage.setItem("weatherData",stringconvert)
    console.log(weatherData);

  }

  
  checkWeather();

 


});
