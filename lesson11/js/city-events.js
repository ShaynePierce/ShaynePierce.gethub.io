const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

async function getJSON() {
    try {
        let res = await fetch(requestURL);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderGetCityEvents(cityName) {
    let eventHTML = '<h3>Local Events</h3><ul>';
    let citiesJSON = await getJSON();
    let cities = citiesJSON['towns'];
    let cityData = cities.filter(city => city.name == cityName);
    cityData[0].events.forEach(event => {
        eventParts = event.split(':');
        eventHTML += `<li>${eventParts[0]}:<span class="event-desc">${eventParts[1]}</span></li>`;
    });
    eventHTML += '</ul>';
    document.querySelector("div.events").innerHTML = eventHTML;
}

let activeMenuCity = document.querySelector("a.active");
if (activeMenuCity !== null) {
    renderGetCityEvents(activeMenuCity.textContent);
}