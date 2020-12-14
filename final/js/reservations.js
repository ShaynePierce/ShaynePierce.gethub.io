const costRequestURL = 'data/rental-data.json';

async function getJSON() {
    try {
        let res = await fetch(costRequestURL);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function makeConfirmation() {
    let rentalJSON = await getJSON();
    let scooters = rentalJSON['scooters'];
    
    var params = new URLSearchParams(location.search);

    let totalCost = 0;

    for (i = 0; i < scooters.length; i++) {
        if (scooters[i].name == params.get('vehicle-type')) {
            if (params.get('duration') == 'full') {
                totalCost = scooters[i].resFullDay;
            } else {
                totalCost = scooters[i].resHalfDay;
            }
        }
    }
    var data = `
    <h2>Success!</h2>
    <h3>Your Reservation Request number is ${(Math.round(Math.random() * 1000000))}:</h3>
    <table>
        <tr>
            <th>Your Full Name:</th>
            <td>${params.get('fname')}</td>
        </tr>
        <tr>
            <th>Email:</th>
            <td>${params.get('email')}</td>
        </tr>
        <tr>
            <th>Phone:</th>
            <td>${params.get('phone')}</td>
        </tr>
        <tr>
            <th>Home State/Country:</th>
            <td>${params.get('state')}</td>
        </tr>
        <tr>
            <th>Cruise Line:</th>
            <td>${params.get('cruise')}</td>
        </tr>
        <tr>
            <th>Reservation Date:</th>
            <td>${params.get('reservation-date')}</td>
        </tr>
        <tr>
            <th>Vehicle type:</th>
            <td>${params.get('vehicle-type')}</td>
        </tr>
        <tr>
            <th>Duration:</th>
            <td>${params.get('duration')}</td>
        </tr>
        <tr>
            <th>Additional Info:</th>
            <td>${params.get('additional-info')}</td>
        </tr>
    </table>

    <p>The total cost of your reservation will be <strong>$${(totalCost * 1.05).toFixed(2)}</strong> which includes 5% local tourism tax. Please have cash or a credit card ready at time of rental.</p> 
    <p>For any questions or concerns, please email reservations@scooterrentals.com</p> 

    `;

    document.querySelector(".confirmation").innerHTML = data;
}

makeConfirmation();