var params = new URLSearchParams(location.search);
var data = '<strong>Your Proposed Course Data: </strong><br/>';
data = data + 'First Name: ' + params.get('fname') + '<br/>';
data = data + 'Last Name: ' + params.get('lname') + '<br/>';
data = data + 'Phone: ' + params.get('phone') + '<br/>';
data = data + 'Email: ' + params.get('email') + '<br/>';
data = data + 'Website: ' + params.get('url') + '<br/>';
data = data + 'Audience: ' + params.get('audience') + '<br/>';
if (params.has('editing')) {data = data + 'Photo Editing: ' + params.get('editing') + '<br/>';}
if (params.has('coding')) {data = data + 'Coding: ' + params.get('coding') + '<br/>';}
if (params.has('process')) {data = data + 'Pre-Processor: ' + params.get('process') + '<br/>';}
if (params.has('client')) {data = data + 'FTP Client: ' + params.get('client') + '<br/>';}
data = data + 'Completed Date: ' + params.get('completedDate') + '<br/>';
switch (params.get('subject')) {
    case 'software':
        data = data + 'Subject: Software Development<br/>';
        break;
    case 'creative':
        data = data + 'Subject: Creative Professional<br/>';
        break;
    case 'info':
        data = data + 'Subject: Information Technology<br/>';
        break;
    case 'data':
        data = data + 'Subject: Data Professional<br/>';
        break;
    case 'construction':
        data = data + 'Subject: Construction<br/>';
        break;
    case 'manufacturing':
        data = data + 'Subject: Manufacturing<br/>';
        break;
    case 'business':
        data = data + 'Subject: Business Professional<br/>';
        break;
    case 'security':
        data = data + 'Subject: Cyber Security<br/>';
        break;
}
data = data + 'Authors: ' + params.get('authors') + '<br/>';
document.querySelector(".mydata").innerHTML = data;