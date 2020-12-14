var vehicleNum = -1;
var resparams = new URLSearchParams(location.search);
if (resparams.has('vehicle')) {
    vehicleNum = resparams.get('vehicle');
}
if (resparams.has('fullDay')) {
    fullDay = resparams.get('fullDay');
    if (fullDay == 'Yes') {
        document.getElementById("duration-full").checked = true;
    } else {
        document.getElementById("duration-half").checked = true;
    }
}

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
    let vehicleDataList = document.querySelector('#vehicle-type-selector');

    let html = '';
    scooters.forEach(vehicle => {
        html += `
            <option value="${vehicle.name}">${vehicle.name}</option>`; 
    });

    vehicleDataList.innerHTML = html;
    vehicleDataList.selectedIndex = vehicleNum;
}

loadRentalOptions();

