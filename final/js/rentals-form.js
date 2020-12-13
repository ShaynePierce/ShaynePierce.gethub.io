const requestURL = 'data/rental-data.json';

async function getJSON() {
    try {
        let res = await fetch(requestURL);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function loadRentalOptions() {
    let rentalJSON = await getJSON();
    let scooters = rentalJSON['scooters'];
    let vehicleDataList = document.querySelector('datalist');

    let html = '';
    scooters.forEach(vehicle => {
        html += `
            <option value="${vehicle.name}">`;
    });
    vehicleDataList.innerHTML = html;
}

loadRentalOptions();