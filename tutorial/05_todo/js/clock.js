const clock = document.querySelector('.clock')

function getTime (){
    const now = new Date()
    const hour = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()

    const hours = `${hour < 10 ? `0${hour}` : `${hour}`}`
    const mints = `${min < 10 ? `0${min}` : `${min}`}`
    const secs = `${sec < 10 ? `0${sec}` : `${sec}`}`

    clock.innerHTML = `현재시각<br>${hours}:${mints}:${secs}`
}

function init(){
    getTime()
    setInterval(getTime, 500)
}

init()

