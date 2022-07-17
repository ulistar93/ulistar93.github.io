const clock = document.querySelector("h1#clock")

function getClock(){
    const date = new Date()
    //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    const hours = String(date.getHours()).padStart(2,'0')
    const minutes = date.getMinutes().toString().padStart(2,'0')
    const seconds = date.getSeconds().toString().padStart(2,'0')
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000)
//setTimeout(sayHello, 5000)