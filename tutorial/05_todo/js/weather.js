const weather = document.querySelector('.weather')
const API_KEY = '5d3d9932eb89fc475b332c6046732403'

function getWeater(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`)
    .then(res => res.json())
    .then(data => {
        const temp = data.main.temp
        const city = data.name

        weather.innerHTML = `${temp}°C, ${city}`
    })
}

function saveCoords(coords){
    localStorage.setItem('coords',  JSON.stringify(coords))
}

function geoSuccess(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const coords = {
        latitude: lat,
        longitude: lon
    }
    saveCoords(coords)
    getWeater(lat, lon)
}

function geoError() {
    console.log('실패')
}

function askCoords(){
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem('coords')
    if(loadedCoords == null){
        askCoords()
    }else{
        const parseCoords = JSON.parse(loadedCoords)
        getWeater(parseCoords.latitude, parseCoords.longitude)
    }
}

function init() {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
    loadCoords()
}

init()