const APIKEY = "0fb671bb4a5149ea73c3925a2642447e";

function onSuccess(position){
    let lat = position.coords.latitude;
    let logi = position.coords.longitude;
    console.log("you live in " , lat , logi);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${logi}&appid=${APIKEY}&units=metric`
    // console.log(url);
    fetch(url)
    // .then((response)=>{
        // console.log(response.json());
    // })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data.name, data.weather[0].main);
        const nameOfLocation = document.querySelector("#weather span:first-child");
        const weatherOfLocation = document.querySelector("#weather span:nth-child(2)");
        // console.log(weatherOfLocation);

        nameOfLocation.innerText = `Place: ${data.name}`;
        weatherOfLocation.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;

    });
}

function onError(){
    alert("Can't spot you on , No weather matching with your location");
}

navigator.geolocation.getCurrentPosition(onSuccess,onError);