function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("showmenu");
}

function getWeekday() {
    var dayNameList = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];      
    return dayNameList[new Date().getDay()];
}

function getFullDateProper() {
    var currentDate = new Date();
    var dayNameList = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
      var monthNameList = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];  
    return `${dayNameList[currentDate.getDay()]}, ${currentDate.getDate()} ${monthNameList[currentDate.getMonth()]} ${currentDate.getFullYear()}`; 
}

document.getElementsByClassName('copyright-year')[0].innerHTML = new Date().getFullYear();
document.getElementsByClassName('current-date')[0].innerHTML = getFullDateProper();
