
const apiKey="c6fc06b2b59bd67b516e0f453f1b12a3";//my api key 
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&appid="


//part of the alternate method.
// const searchBox=document.querySelector("#city");
// const searchBtn=document.querySelector(".search button");

var weatherImage=document.querySelector(".iconNinfo img");




async function checkWeather(city) {

    const response=  await fetch(apiUrl+apiKey+"&q="+city);

    let data = await response.json();

    //if the user enters the wrong city name to handle this case we use response.ok
    if(response.ok){

     console.log(data);

     document.querySelector(".iconNinfo h2").innerHTML=Math.round(data.main.temp)+"°C";
     document.querySelector(".iconNinfo h3").innerHTML=data.name;
     document.querySelector(".data1 h3").innerHTML=data.main.humidity+"%";
     document.querySelector(".data2 h3").innerHTML=data.wind.speed+"m/s";

            if(data.weather[0].main=="Mist"){
                weatherImage.src="mist.png";
           }

            else if(data.weather[0].main=="cloud"){
                weatherImage.src="cloud.png";
            }

            else if(data.weather[0].main=="cloudy snowing"){
                weatherImage.src="cloudy snowing.png";
            }

            else if(data.weather[0].main=="cyclone"){
                weatherImage.src="cyclone.png";
           
            }

            else if(data.weather[0].main=="emergency heat"){
                weatherImage.src="emergency heat.png";

            }

            else if(data.weather[0].main=="flood"){
                weatherImage.src="flood.png";

            }

            else if(data.weather[0].main=="landslide"){
                weatherImage.src="landslide.png";

            }

            else if(data.weather[0].main=="rainy"){
                weatherImage.src="rainy.png";

            }


        
   
}

   else{
       alert("no city found");
    }
}

//instead of creating the onclick event on the button we can 
//add the event listner to the button this will also do the job

function myFunction(){

const cityName=document.querySelector("#city").value;
checkWeather(cityName);

}

//alternate method 
// searchBtn.addEventListener("click",checkWeather(searchBox.value));