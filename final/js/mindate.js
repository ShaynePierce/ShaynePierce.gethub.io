let tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);
document.querySelector('input[name="reservation-date"]').setAttribute('min', tomorrowDate.getFullYear() + '-' + ('00' + (tomorrowDate.getMonth() + 1)).substr(-2, 2) + '-' + ('00' + tomorrowDate.getDate()).substr(-2, 2));