const weatherDOM = document.querySelector("#weather")

const API_KEY = "67ed080ed05a0268562e1c5c388e1479"

function weatherImoticon(weather){
    switch(weather){
        case "Thunderstorm":
            return "⛈"
        case "Drizzle":
            return "🌦"
        case "Rain":
            return "🌧"
        case "Snow":
            return "🌨"
        case "Clear":
            return "☀"
        case "Clouds":
            return "☁"
        case "Tornado":
            return "🌪"
        default:
            return "🌫"
    }
}

function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(respose => respose.json())
        .then(data => {
            const weather = weatherDOM.querySelectorAll("span")[0]
            const city = weatherDOM.querySelectorAll("span")[1]
            const weatherImogi = weatherImoticon(data.weather[0].main)
            weather.innerText = `${weatherImogi} ${data.main.temp} ℃`
            city.innerText = data.name
    })
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

const weatherButton = document.querySelector("#weather button")
function weatherButtonHandler(){
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
}
weatherButton.addEventListener("click", weatherButtonHandler)