
const apiKey="c6fc06b2b59bd67b516e0f453f1b12a3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&appid="


async function checkWeather(city) {

    const response=  await fetch(apiUrl+apiKey+"&q="+city);

    let data = await response.json();

    if(response.ok){

     console.log(response);

     document.querySelector(".iconNinfo h2").innerHTML=Math.round(data.main.temp)+"°C";
     document.querySelector(".iconNinfo h3").innerHTML=data.name;
     document.querySelector(".data1 h3").innerHTML=data.main.humidity+"%";
     document.querySelector(".data2 h3").innerHTML=data.wind.speed+"m/s";

    }
    else{
      alert("no city found");
    }



}


function myFunction(){

const cityName=document.querySelector("#city").value;
checkWeather(cityName);


}