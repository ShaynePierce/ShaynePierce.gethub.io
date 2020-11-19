function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("showmenu");
}

/*the following function closes the menu if resized - onresize event on the body element*/
function toggleMenuClosedOnWindowReSize(){
  document.getElementsByClassName("navigation")[0].classList.remove("showmenu");
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

var pancakeExists = document.querySelector("aside.pancakes") !== null;
if (pancakeExists && new Date().getDay() != 5) {
  document.querySelector("aside.pancakes").style.display = 'none';
}