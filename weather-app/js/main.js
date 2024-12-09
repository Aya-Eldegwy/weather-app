
const apikey='4b27a2ec1525292968f549a050991732';
const api='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchbox=document.querySelector('.search input');
const searchbtn=document.querySelector('.search button');
const imgIcon =document.querySelector('.img-icon');
async function checkweather(city) {
    const response= await fetch(api + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector('.erro').style.display='block';
        document.querySelector('.weather').style.display='none'
    }
    else{
        const data= await response.json();
        document.querySelector('.city').innerHTML= data.name;
        document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML= data.main.humidity + '%';
        document.querySelector('.wind').innerHTML= data.wind.speed + 'km/h';
        // add img-icon
        if( data.weather[0].main == 'Clouds'){
            imgIcon.src ='imgs/clouds.png'
        }
        else if(data.weather[0].main == 'Clear'){
            imgIcon.src ='imgs/clear.png';
        }
        else if(data.weather[0].main == 'Mist'){
            imgIcon.src ='imgs/mist.png';
        }
        else if(data.weather[0].main == 'Drizzle'){
            imgIcon.src ='imgs/drizzle.png';
        }
        else if(data.weather[0].main == 'Rain'){
            imgIcon.src ='imgs/rain.png';
        }
        else if(data.weather[0].main == 'Snow'){
            imgIcon.src ='imgs/snow.png';
        };
        document.querySelector('.weather').style.display='block';
        document.querySelector('.erro').style.display='none';
    
    }

}
searchbtn.addEventListener('click',()=>{
    checkweather(searchbox.value);
});

