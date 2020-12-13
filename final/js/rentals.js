const requestURL = 'data/rental-data.json';

async function getJSON() {
    try {
        let res = await fetch(requestURL);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function makeRentalTable() {
    let rentalJSON = await getJSON();
    let scooters = rentalJSON['scooters'];

    let html = '';
    scooters.forEach(vehicle => {        
        featuresHtml = '<ul>';
        vehicle.features.forEach(feature => {
            featuresHtml += `<li>${feature}</li>`;
        });
        featuresHtml += '</ul>';

        html += `
            <div class="rental-item">
                <picture>
                    <img src="images/${vehicle.image}" alt="${vehicle.imageDesc}" loading="lazy">
                </picture>
                <div class="vehicle-info">
                    <p class="rental-item-name">${vehicle.name}</p>
                    <p>Max Riders: <span class="riders">${vehicle.riders}</span></p>                
                    ${featuresHtml}
                </div>
                <table>
                    <tr>
                        <th rowspan="2">Reservation</th>
                        <th>Half-Day</th>
                        <td>$${vehicle.resHalfDay}</td>
                    </tr>
                    <tr>
                        <th>Full-Day</th>
                        <td>$${vehicle.resFullDay}</td>
                    </tr>
                    <tr>
                        <th rowspan="2">Walk-In</th>
                        <th>Half-Day</th>
                        <td>$${vehicle.walkInHalfDay}</td>
                    </tr>
                    <tr>
                        <th>Full-Day</th>
                        <td>$${vehicle.walkInFullDay}</td>
                    </tr>
                </table>    
            </div>`;
    });
    html += `
        </tbody>
    </table>
    `;

    let container = document.querySelector('.rentals');
    container.innerHTML = html;
}

makeRentalTable();