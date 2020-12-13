var params = new URLSearchParams(location.search);

function makeConfirm() {
    var data = `
    <h2>Success!</h2>
    <h3>Your Reservation Request:</h3>
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
    <p>For any concerns, please email reservations@scooterrentals.com</p> 

    `;

    document.querySelector(".confirmation").innerHTML = data;
}

makeConfirm();