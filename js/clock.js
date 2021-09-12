const clock = document.querySelector("h2#clock");
// clock.innerText = "lalalala";

function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = date.getSeconds().toString().padStart(2,"0");
    clock.innerText = `${hour}:${minute}:${second}`;
}

getClock();
setInterval(getClock, 1000);