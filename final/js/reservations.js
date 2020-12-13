var params = new URLSearchParams(location.search);

function makeConfirm() {
    var data = `
    <h2>Success!</h2>
    <h3>Your Reservation Request:</h3>
    <table>
        <tr>
            <td>Your Full Name:</td>
            <td>${params.get('fname')}</td>
        </tr>
        <tr>
            <td>Email:</td>
            <td>${params.get('email')}</td>
        </tr>
        <tr>
            <td>Phone:</td>
            <td>${params.get('phone')}</td>
        </tr>
        <tr>
            <td>Reservation Date:</td>
            <td>${params.get('reservation-date')}</td>
        </tr>
        <tr>
            <td>Vehicle type:</td>
            <td>${params.get('vehicle-type')}</td>
        </tr>
        <tr>
            <td>Duration:</td>
            <td>${params.get('duration')}</td>
        </tr>
        <tr>
            <td>Additional Info:</td>
            <td>${params.get('additional-info')}</td>
        </tr>
    </table>
    <p>For any concerns, please email reservations@scooterrentals.com</p> 

    `;

    document.querySelector(".confirmation").innerHTML = data;
}

makeConfirm();