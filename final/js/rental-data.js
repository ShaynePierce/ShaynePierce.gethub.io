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

    let html = `
    <table>
        <tbody>
            <tr>
                <th rowspan="2">Model</th>
                <th rowspan="2">Riders</th>
                <th colspan="2">Reservation</th>
                <th colspan="2">Walk-in</th>
            </tr>
            <tr>
                <th>Half-Day</th>
                <th>Full-Day</th>
                <th>Half-Day</th>
                <th>Full-Day</th>
            </tr>`;
    scooters.forEach(vehicle => {
        html += `
            <tr>
                <td>${vehicle.name}</td>
                <td>${vehicle.riders}</td>
                <td>$${vehicle.resHalfDay}</td>
                <td>$${vehicle.resFullDay}</td>
                <td>$${vehicle.walkInHalfDay}</td>
                <td>$${vehicle.walkInFullDay}</td>
            </tr>`;
    });
    html += `
        </tbody>
    </table>
    `;

    let container = document.querySelector('.rental-items');
    container.innerHTML = html;
}

makeRentalTable();