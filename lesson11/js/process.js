var params = new URLSearchParams(location.search);
var data = '<br/><strong>Your Submitted Storm Data: </strong><br/>';
data = data + 'Your Full Name: ' + params.get('fname') + '<br/>';
data = data + 'Email: ' + params.get('email') + '<br/>';
data = data + 'Phone: ' + params.get('phone') + '<br/>';
data = data + 'Zipcode: ' + params.get('zipcode') + '<br/>';
data = data + 'Storm Date: ' + params.get('stormdate') + '<br/>';
data = data + 'Storm Type: ' + params.get('stormtype') + '<br/>';
data = data + 'Severity: ' + params.get('storm-severity') + '<br/>';
switch (params.get('storm-region')) {
    case 'preston':
        data = data + 'Storm Region: Preston<br/>';
        break;
    case 'soda':
        data = data + 'Storm Region: Soda Springs<br/>';
        break;
    case 'fish':
        data = data + 'Storm Region: Fish Haven<br/>';
        break;
}
data = data + 'Are you in danger? ' + params.get('in-danger') + '<br/>';
data = data + 'Additional Info: ' + params.get('additional-info') + '<br/><br/>';
document.querySelector(".storm-data-confirmation").innerHTML = data;