const API_KEY = "6f2bae7636b533dc3a01547d662b4e75";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const location = document.querySelector("#weather span:nth-child(1)");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const nowTemp = document.querySelector("#weather span:nth-child(3)");
        const maxTemp = document.querySelector("#weather span:nth-child(4)");
        const minTemp = document.querySelector("#weather span:nth-child(5)");
        location.innerText = data.name;
        weather.innerText = data.weather[0].main;
        nowTemp.innerText = data.main.temp;
        maxTemp.innerText = data.main.temp_max;
        minTemp.innerText = data.main.temp_min;
    });
}

function onGeoError() {
    alert("Geo Fail")
    
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);