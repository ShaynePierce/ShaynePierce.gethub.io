let key = '09c3a2bd1edd511d62c2dd195b57b417';
let cityId = '5604473';
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}&units=imperial`;

async function getJSON(requestURL) {
    try {
        let res = await fetch(requestURL);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderWeather() {
    //console.log(weatherUrl);

    let weatherData = await getJSON(weatherUrl);
    //console.log(weatherData);

    document.getElementById('current-temp').textContent = weatherData.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';  // note the concatenation
    const desc = weatherData.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);    
}

renderWeather();