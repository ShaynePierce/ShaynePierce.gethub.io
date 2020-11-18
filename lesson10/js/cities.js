const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

async function getJSON() {
    try {
        let res = await fetch(requestURL);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function rendercities() {
    let citiesJSON = await getJSON();
    let cities = citiesJSON['towns'];

    let html = '';
    html = addCity(cities, 'Preston') + addCity(cities, 'Soda Springs') + addCity(cities, 'Fish Haven');

    let container = document.querySelector('.cities');
    container.innerHTML = html;
}

function addCity(cities, cityName) {
    let htmlSegment =  '';
    cities.forEach(city => {
        if (city.name == cityName) {
            let pop = city.currentPopulation.toLocaleString(undefined);
            let rain = Math.round(city.averageRainfall * 10) / 10;    

            htmlSegment =  `
                <section class="city">                            
                    <picture>
                        <source media="(max-width: 240px)" srcset="images/240${city.photo}">
                        <source media="(min-width: 241px)" srcset="images/${city.photo}">
                        <img src="images/${city.photo}" alt="Photo of ${city.name}" loading="lazy">
                    </picture>
                    <div class="city-info">
                        <h2>${city.name}</h2>
                        <p class="motto">${city.motto}</p>
                        <p class="year-founded">&bull; Year Founded: <span class="city-data">${city.yearFounded}<span></p>
                        <p class="population">&bull; Population: <span class="city-data">${pop}<span></p>        
                        <p class="annual-rain">&bull; Annual Rain Fall: <span class="city-data">${rain}"<span></p>        
                    </div>
                </section>`;                
        }
    });
    return htmlSegment;
}

rendercities();