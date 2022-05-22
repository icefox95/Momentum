//변수

const API_KEY = "550eae87d43780bffb6d284e5f7b3600"

//위치를 성공적으로 받았을 때
function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}

//위치를 못 받았을 때
function onGeoError(){
    alert("Can't find you. It is difficult to provide weather information.")
}

//성공 함수, 에러 함수
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
