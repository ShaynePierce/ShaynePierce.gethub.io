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
        'Wed',
        'Thurs',
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
    //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    // [20.5083, -86.9458]
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&appid=${key}&units=imperial`;

    let forecastData = await getWeatherJSON(forecastUrl);
    let currentHtml = `
        <p><span class="weather-point">${Math.round(forecastData.current.temp)}&deg;F</span> and <span class="weather-point">${forecastData.current.humidity}%</span> humidity with <span class="weather-point">${forecastData.current.weather[0].main}</span></p>`;
    document.querySelector('.current-condition').innerHTML = currentHtml;
    if(forecastData.hasOwnProperty('alerts')){
        let alerts = forecastData.alerts;
        document.querySelector('.weather-alert').innerHTML = 'Alert: ' + alerts[0].event;
    }

    let forecastDaily = forecastData.daily;

    let newDate = new Date();
    let dayDescrip = '';
    let iconimg = '';
    let dayNum = 0;

    forecastDaily.forEach(day => {
        if (dayNum > 0 && dayNum < 4) {
            newDate = new Date(day.dt * 1000);
            if (newDate.getDate() == new Date().getDate()) {
                dayDescrip = 'Today';
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
            document.querySelector(`.forecast-day${dayNum} .weather-word`).innerHTML = `${Math.round(day.temp.day)}&deg;F`; //${toTitleCase(day.weather[0].description)}: 
        }
        dayNum++;
    });
}

let activeMenu = document.querySelector("a.active");
if (activeMenu !== null) {
    renderWeather(activeMenu.textContent);
}
