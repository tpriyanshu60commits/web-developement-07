document.querySelector("button").addEventListener("click", function(event)
{
    event.preventDefault();
    const apikey = "9a19d11109bffd4bec89831fc10b578b";
    const city = document.getElementById("city").value;
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

    async function weatherData()
    {
        const responce = await fetch(apiurl);
        const data = await responce.json();
        console.log(data);

        document.getElementById("temperature").innerText = data.main.temp;
        document.getElementById("cityname").innerText = data.name;
        document.getElementById("humidityValue").innerText = data.main.humidity + "%";
        document.getElementById("windSpeedValue").innerText = data.wind.speed+"km/h";
        
        
    }
    weatherData();
})