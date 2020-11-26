function getWindChill(temp, wind) {
    if (temp < 50 && wind > 3)  {
        return Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16))) + '&deg;F';  
    } else {
        return 'N/A';
    }
}

async function getWeatherJSON(requestURL) {
    try {
        let res = await fetch(requestURL);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

function getWeekdayText(dayNum = 0) {
    if (dayNum == 0) {dayNum = new Date().getDay()};
    var dayNameList = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];      
    return dayNameList[dayNum];
}

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

async function renderWeather(cityName) {
    let key = '09c3a2bd1edd511d62c2dd195b57b417';
    let cityId = '5604473';
    switch(cityName) {
        case 'Preston':
            cityId = '5604473';
            break;
        case 'Soda Springs':
            cityId = '5607916'; 
            break;
        case 'Fish Haven':
            cityId = '5585010'; 
            break;
    }
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}&units=imperial`;

    let weatherData = await getWeatherJSON(weatherUrl);

    document.querySelector('.current-condition').innerHTML = `${weatherData.weather[0].main}`;
    document.querySelector('.current-temp').innerHTML = `${Math.round(weatherData.main.temp)}&deg;F`;
    document.querySelector('.wind-speed').innerHTML = `${Math.round(weatherData.wind.speed)} mph`;
    document.querySelector('.wind-chill').innerHTML = `${getWindChill(weatherData.main.temp, weatherData.wind.speed)}`;
    document.querySelector('.humidity').innerHTML = `${Math.round(weatherData.main.humidity)}%`;


    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${key}&units=imperial`;

    let forecastData = await getWeatherJSON(forecastUrl);
    let forecastDays = forecastData.list;
    let newForecastDays = forecastDays.filter(day => day.dt_txt.includes('18:00:00'));

    let htmlstring = '';
    let newDate = new Date();
    let dayDescrip = '';
    let iconimg = '';
    let dayNum = 1;

    newForecastDays.forEach(day => {
        newDate = new Date(day.dt_txt);
        if (newDate.getDate() == new Date().getDate()) {
            dayDescrip = 'Today';
        } else if (newDate.getDate() == new Date().getDate() + 1) {
            dayDescrip = 'Tomorrow';
        } else {
            dayDescrip = getWeekdayText(newDate.getDay());
        }

        iconimg = '';
        switch (day.weather[0].icon.substr(0, 2)) {
            case '01': //sunny or clear
                iconimg = 'sunny.png';
                break;
            case '02': //few clouds
                iconimg = 'partly-cloudy.png';
                break;
            case '03': //scattered clouds
                iconimg = 'cloudy.png';
                break;
            case '04': //broken clouds
                iconimg = 'broken-clouds.png';
                break;
            case '09': //showers
                iconimg = 'showers.png';
                break;
            case '10': //rain
                iconimg = 'rain.png';
                break;
            case '11': //thunderstorm 
                iconimg = 'thunderstorms.png';
                break;
            case '13': //snow
                iconimg = 'snow.png';
                break;
            case '50': //mist or fog
                iconimg = 'mists.png';
                break;
        }

        document.querySelector(`.forecast-day${dayNum} h4`).innerHTML = dayDescrip;
        document.querySelector(`.forecast-day${dayNum} .weather-date`).innerHTML = `${newDate.getMonth()+1}/${newDate.getDate()}`;
        document.querySelector(`.forecast-day${dayNum} img`).setAttribute('src', `images/${iconimg}`);
        document.querySelector(`.forecast-day${dayNum} img`).setAttribute('alt', `${iconimg} alternate image for ${day.weather[0].icon}png.`);
        document.querySelector(`.forecast-day${dayNum} img`).setAttribute('title', day.weather[0].main);
        document.querySelector(`.forecast-day${dayNum} .weather-word`).innerHTML = `${toTitleCase(day.weather[0].description)}: ${Math.round(day.main.temp)}&deg;F`;
        dayNum++;
    });
    document.querySelector('.main-forecast h3').innerHTML = '5-Day Forecast for ' + cityName;
}

let activeMenu = document.querySelector("a.active");
if (activeMenu !== null) {
    renderWeather(activeMenu.textContent);
}
